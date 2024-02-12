import express from 'express';
import pg from 'pg';
import dotenv from 'dotenv';
import serverless from 'serverless';

dotenv.config();

const { Client } = pg;
const app = express();
const router = express.Router();

// CONNEXION A LA BDD
const client = new Client(process.env.DATABASE_URL);
client.connect();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(router);

// === INSCRIPTION A LA NEWSLETTER === //
router.post("/newsletter", 
    async (req, res)=>{
        try {
            // RECUPERATION DE L'ADRESSE MAIL
            const {firstname, email} = req.body;

            // INSERTION EN BDD
            const insertQuery = {
                text: `INSERT INTO "newsletter"(prenom, email, inscription) VALUES ($1, $2, 'true')`,
                values: [firstname, email]
            }
            const response = await client.query(insertQuery);

            if(!response.rowCount){
                console.log(`Erreur lors de l'inscription`);
            } else {
                console.log(`Inscription réussie.`);
            }
        } catch(error) {
            console.error(error);
        };
        res.redirect('https://ladc-evenements.fr/');
    }
);

router.post("/unsubscribe",
    async (req, res) => {
        try {
            const { email } = req.body;
            const unsubscribeQuery = {
                text: `UPDATE "newsletter" SET inscription='false' WHERE email=$1`,
                values: [email]
            };
            const response = await client.query (unsubscribeQuery);

            if(!response.rowCount){
                console.log(`Erreur lors de la désinscription`);
            } else {
                console.log(`Désinscription effectuée.`);
            }
        } catch (error) {
            console.error(error);
        };
        res.redirect('https://ladc-evenements.fr/')
    })

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);