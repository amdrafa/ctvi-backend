import { CertificateService } from './../services/certificate/CertificateService';
import multer from "multer";
import { Router } from "express"
import { error } from 'console';

export const certificateRoutes = Router()

const service = new CertificateService()

certificateRoutes.get('/list', async (req, res)=>{
    const certificates = await service.list()

    if(certificates){
        return res.status(200).json(certificates)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.get('/list/:id', async (req, res)=>{
    const certificate = await service.listByID(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.post('/create', async (req, res)=>{
    const certificate = await service.create(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.put('/update/:id', async (req, res)=>{
    const certificate = await service.update(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
})

certificateRoutes.delete('/delete/:id', async (req, res)=>{
    const certificate = await service.delete(req)

    if(certificate){
        return res.status(200).json(certificate)
    }
    return res.status(200).json({message: 'Something went wrong'})
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
        const novoNomeArquivo = require('crypto')
            .randomBytes(64)
            .toString('hex');

        // Indica o novo nome do arquivo:
        cb(null, `${novoNomeArquivo}.${extensaoArquivo}`)
    }
});

const upload = multer({ storage, dest: 'uploads/'});

certificateRoutes.post('/upload', upload.single('certificate'), (req, res) => {
    const { nome, site } = req.body;
    res.json({ nome, site });
});