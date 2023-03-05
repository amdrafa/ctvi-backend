import { ValidateToken } from './../middlewares/ValidateToken';
import { response, Router } from 'express';
import { UserService } from '../services/user/UserService';
import jwt from 'jsonwebtoken';
import multer from 'multer';
import { error } from 'console';

export const userRoutes = Router();

const userService = new UserService();

userRoutes.post("/create", (request, response) => {

    // FAZER VALIDAÇÃO DE EMAIL. SALVANDO 2 USERS COM O MESMO EMAIL.
    
    const user = userService.create(request);

    if(!user){
        return response.status(200).json({message: "It was not possible to create this user."})
    }
    
    return response.status(201).json(user);
})

userRoutes.post("/login", async (request, response) => {
    const {email, password} = request.body;

    const user = await userService.login(email, password);

    if(!user){
        return response.status(401).json({message: "Invalid email or password"})
    }


    const token = jwt.sign({ id: user?.id, name: user?.name, roles: user?.roles, email: user?.email, isForeigner: user?.isForeigner}, "ctvi-secret", { expiresIn: "8h" })

    return response.status(200).json({user, token});
})


// userRoutes.use(ValidateToken)

userRoutes.get("/list", async (request, response) => {
    const allUsers = await userService.list();

    if(!allUsers){
        return response.status(200).json({message: "No data found"});
    }

    return response.status(200).json(allUsers)
})

userRoutes.get("/list/:id", async (request, response) => {
    const user = await userService.listById(Number(request.params.id))

    if(!user){
        return response.status(200).json({message: "User not found"})
    }

    return response.status(200).json(user);
})


// RETORNAR UM NOVO TOKEN COM USER ATUALIZADO
userRoutes.post("/update", async (request, response) => {
    const user = await userService.update(request);

    if(!user){
        return response.status(200).json({message: "It was not possible to edit this user."});
    }
    
    return response.status(200).json(user);
})

userRoutes.delete("/delete/:id", async (request, response) => {

    const userId = Number(request.params.id);
    const isUserDeleted = await userService.delete(userId);

    if(!isUserDeleted){
        return response.status(200).json({message: "It was not possible to delete this user."});
    }
    
    return response.status(200).send();
})

userRoutes.post("/:userId/bindcompany/:companyId", async (request, response) => {

    const { userId, companyId } = request.params;

    const isUserUpdated = await userService.bindToCompany(Number(userId), Number(companyId))

    return response.json(isUserUpdated);

})

/*** 
 * 
 * UPLOAD FILE COM MULTER
 * 
*/
// Configuração de armazenamento
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        // Extração da extensão do arquivo original:
        const extensaoArquivo = file.originalname.split('.')[1];
        const conditions = ["png", "jpg", "jpeg"];
        if(!conditions.includes(extensaoArquivo)){
            throw error
        }
        // Cria um código randômico que será o nome do arquivo
        const novoNomeArquivo = "user_id_"+req.params.userId +"_certificate_id_"+ req.params.certificateId
        /*require('crypto')
            .randomBytes(64)
            .toString('hex');*/

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage, dest: 'uploads/'});

userRoutes.post('/:userId/upload/:certificateId', upload.single('certificate'), (req, res) => {
    const { nome, site } = req.body;
    const { userId, certificateId } = req.params;
    const userService = new UserService()
    userService.updateCertificates(req, Number(userId), Number(certificateId))
    res.json({ nome, site });
});



userRoutes.post("/:userId/approve/:certificateId", async (req, res) => {

    const { userId, certificateId } = req.params;
    const userService = new UserService()
    let isUserUpdated = await userService.updateCertificates(req, Number(userId), Number(certificateId))
    return res.json(isUserUpdated);

})
