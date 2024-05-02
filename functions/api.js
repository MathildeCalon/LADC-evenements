import express, { Router } from 'express';
import dotenv from 'dotenv';
import sendMails from './mailService.js';
import serverless from 'serverless-http';
import cors from 'cors';

dotenv.config();

const app = express();
const router = Router();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
    cors({
      origin: [
        'https://ladc-evenements.fr',
      ],
      credentials: true,
      methods: 'GET,POST',
    })
  );

app.use(router);

router.post('/.netlify/functions/api', async (req, res) => {
    const formData = req.body;

    try{
        await sendMails.sendContactMails(formData);
        await sendMails.sendConfirmationMail(formData);
        res.redirect('https://ladc-evenements.fr');
    } catch(error) {
        res.status(500).send('Une erreur est survenue. Veuillez réessayer plus tard.');
    }
});

app.use('/.netlify/functions/api', router);
module.exports.handler = serverless(app);