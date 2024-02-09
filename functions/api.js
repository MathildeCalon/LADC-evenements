import express from 'express';
import cors from 'cors';
import pg from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const { Client } = pg;
const app = express();
const router = express.Router();

// CONNEXION A LA BDD
const client = new Client(process.env.DATABASE_URL);
client.connect();

const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// === CORS === //
// AUTORISE LA COMMUNICATION ENTRE LE FRONT ET LE BACK //
app.use(
    cors({
      origin: 'https://localhost:5173/',
      credentials: true,
      methods: 'GET,PATCH,POST,DELETE',
    })
  );

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

// === LANCEMENT DU SERVEUR === //
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})