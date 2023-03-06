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
    "INSERT INTO public.terms( text, created_at, updated_at) VALUES ('teste', NOW()::DATE, NOW()::DATE);",
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