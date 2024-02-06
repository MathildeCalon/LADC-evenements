import express, { Router } from 'express';
import cors from 'cors';

const app = express();
const router = new Router();

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

// === CORS === //
app.use(
    cors({
      origin: [
        // === LOCAL DEV === //
        'http://localhost:5173',
      ],
      credentials: true,
      methods: 'GET,PATCH,POST,DELETE',
    })
  );

app.use(router);

router.post("/newsletter", (req, res)=>{
    console.log("connexion OK");
    const email = req.body.newsletter;
    const emails = [];
    console.log(`avant le push` + emails);
    emails.push(email);
    console.log(`après le push` + emails);
    }
);

app.listen(PORT, () => {
    console.log(`Server is running`)
})
