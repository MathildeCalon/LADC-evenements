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
        pass: process.env.EMAIL_PASSWORD
    }
});

const sendMails = {
    async sendContactMails(formData) {
        const { prenom, bookingStart, articles, totalAmount, email, telephone } = formData;
        const startDate = new Date(bookingStart).toLocaleDateString();
        try {
            const contactMail = {
                from: 'contact@ladc-evenements.fr',
                to: 'contact@ladc-evenements.fr',
                subject: 'Nouveau message de contact',
                text: `Bonjour,

                Vous avez reçu une nouvelle demande de devis :
                Prénom : ${prenom}
                Email : ${email}
                Téléphone : ${telephone}
                Date souhaitée : ${startDate}
                Articles : ${articles}
                Montant total : ${totalAmount}€
                
                Merci de contacter cette personne rapidement.
                `
            };
            await transporter.sendMail(contactMail);
        } catch(error) {
                console.error(error);
        }
    },

    async sendConfirmationMail(formData) {
        const { prenom, bookingStart, articles, totalAmount, email, telephone } = formData;
        const startDate = new Date(bookingStart).toLocaleDateString();
        try {
            const confirmationMail = {
                from: 'contact@ladc-evenements.fr',
                to: email,
                subject: 'Votre demande de devis',
                text: `Bonjour,

                Merci pour votre demande de devis. Voici un récapitulatif:
                Prénom : ${prenom}
                Email : ${email}
                Téléphone : ${telephone}
                Date souhaitée : ${startDate}
                Articles : ${articles}
                Montant total : ${totalAmount}€

                Nous prendrons rapidement contact avec vous à ce sujet.
                `
            };
            await transporter.sendMail(confirmationMail);
        } catch(error) {
                console.error(error);
        }
    }
};

export default sendMails;