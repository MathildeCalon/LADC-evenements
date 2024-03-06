import express, { Router } from 'express';
import dotenv from 'dotenv';
import sendContactMails from './mailService.js';

dotenv.config();

const app = express();
const router = Router();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(router);

router.post('/contact', async (req, res) => {
    const formData = req.body;

    try{
        const result = await sendContactMails(formData);
        if (result) {
        res.status(200).send('Form data received');
        }
    } catch(error) {
        res.status(500).send('An error occured while sending the form data');
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});