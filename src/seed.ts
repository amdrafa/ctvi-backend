import { Pool } from 'pg';

// Create a pool instance and pass in our config, which we set in our env vars
const pool = new Pool({
    host: "localhost",
    user: "postgres",
    database: "ctvi",
    password: "root",
    port: 5432,
});

// Connect to the db instance
const querys = [
    //query de insert inicial dos termos
    "INSERT INTO public.terms( title, text, created_at, updated_at) VALUES ('Alternative Drive', 'Note: In case of yes, we will send you an information form. Please fill the form and send it back together with the safety data sheet or a comparable document of the vehicle. Present your vehicle to the CTVI team before entering the test tracks. If your vehicle has already gone through this process and the information provided is up to date, you don’t have to provide new information. ', NOW()::DATE, NOW()::DATE);",
    "INSERT INTO public.terms( title, text, created_at, updated_at) VALUES ('Prototype', 'Please enter in case you want to request special prototype measures. ', NOW()::DATE, NOW()::DATE);",
    "INSERT INTO public.terms( title, text, created_at, updated_at) VALUES ('Hazardous substance quantity is greater than daily workshop requirement', 'Note: if the quantities of hazardous substance to be imported exceed the daily workshop requirements, send the appropriate data sheet and an indication of the quantity to be imported to: email@email.com', NOW()::DATE, NOW()::DATE);",
    "INSERT INTO public.terms( title, text, created_at, updated_at) VALUES ('Film / Photo taking', 'Note: Filming and photographing on the proving grounds is strictly forbidden. A special permit may be issued after careful inspection by the management.', NOW()::DATE, NOW()::DATE);",
    "INSERT INTO public.terms( title, text, created_at, updated_at) VALUES ('Autonomous vehicle / vehicle with steering machine', 'Note: If driving tests with autonomous driving systems are carried out in normal operation, an operator who can take control of the vehicle at any time must be employed. If this is not possible, the tests must be carried out in exclusive operation.', NOW()::DATE, NOW()::DATE);",
    "INSERT INTO public.terms( title, text, created_at, updated_at) VALUES ('Event', 'Please give us a short description of your planned event. We might get in contact with you directly to ask you for more details.  ', NOW()::DATE, NOW()::DATE);",
    //query de insert inicial dos recursos
    "INSERT INTO public.resource(name, type, is_active, created_at, update_at) VALUES ('nome teste', 'Test track', true, NOW()::DATE, NOW()::DATE);",
    //query de insert inicial dos certificados
    "INSERT INTO public.certificate(certificate_name, certificate_code, certificate_type, created_at, updated_at) VALUES ('teste', '', 'Upload', NOW()::DATE, NOW()::DATE);"
]
pool.connect((err, client, done) => {
    if (err) throw err;
    try {
        // loop over the lines in array
        querys.forEach((query) => {
            // For each line we run the query
            client.query
            client.query(query, (err, res) => {
                if (err) {
                    console.log(err.stack);
                } else {
                    console.log('Query asserted: ' + query);
                }
            });
        });
    } finally {
        done();
    }
});