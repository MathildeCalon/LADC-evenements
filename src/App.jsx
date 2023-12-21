import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <>
     <div className='main'>
     <img src="logo-blue.png" alt="Logo de LADC Evenements" id="logo-accueil"></img>
      <h1>Bienvenue chez LADC ÉVÉNEMENTS - Ajoutez un plus à vos soirées !</h1>

      <div id="presentation"> 
        <p>À Gondecourt et ses environs, nous sommes votre partenaire pour faire de vos événements des moments exceptionnels. Chez LADC ÉVÉNEMENTS, nous mettons à votre disposition un vaste choix de matériel événementiel à la location, que ce soit pour des associations ou des particuliers, le tout à des tarifs très abordables.</p>
      </div>
      <div id="engagement">
        <p >Notre Engagement : LADC ÉVÉNEMENTS s'engage à rendre votre expérience de location simple, agréable et sans tracas. Notre équipe dévouée est là pour vous conseiller et vous accompagner à chaque étape, assurant ainsi le succès de votre événement.</p>
      </div> 

      <div id="downloads">
        <p>Vous pouvez télécharger notre catalogue directement <a href="telechargements/catalogue.jpg" download="catalogue.jpg">ici</a></p>
        <p>Pour nous contacter : c'est <a href="telechargements/contact.jpg" download="contact.jpg">ici</a> !</p>
      </div>

      <p id="slogan">LADC ÉVÉNEMENTS : Votre Événement, Notre Engagement.</p>

      <figure>
        <img src='exemple_noel.jpg' alt="Exemple d'installation de la borne karaoké" id="image-noel"></img>
        <figcaption>Prestation "Goûter de Noël"</figcaption>
      </figure>

    </div>

    <footer>
      <p id="web-developpement">Développement web : <a href="https://www.linkedin.com/in/mathildecalon/" target="blank">Mathilde Calon</a></p>
    </footer>
    </>
  )
}

export default App
