import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
dotenv.config();

// Simple Mail Transfer Protocol (SMTP) transporter
let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    secure: false,
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
});

async function sendContactMails(formData) {
    const { prenom, bookingStart, articles, totalSum, email, telephone } = formData;
    try {
        const contactMail = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            subject: 'Nouveau message de contact',
            text: `Bonjour,
            Vous avez reçu une nouvelle demande de devis :
            Prénom : ${prenom}
            Date souhaitée : ${bookingStart}
            Articles : ${articles}
            Montant total : ${totalSum}
            Email : ${email}
            Téléphone : ${telephone}
            `
        };
        const result = await transporter.sendMail(contactMail);
     } catch(error) {
            console.error(error);
    }
};

export default sendContactMails;