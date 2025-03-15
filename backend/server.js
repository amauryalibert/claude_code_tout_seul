import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import fetch from 'node-fetch';

// Charger les variables d'environnement du fichier .env
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Vérifier que la clé API est disponible
const STABILITY_API_KEY = process.env.STABILITY_API_KEY;
if (!STABILITY_API_KEY) {
  console.error('Erreur: La clé API Stability AI n\'est pas définie dans le fichier .env');
  process.exit(1);
}

// Middleware
app.use(cors());
app.use(express.json());

// Route pour générer une image
app.post('/generate-image', async (req, res) => {
  try {
    const { prompt } = req.body;
    
    if (!prompt) {
      return res.status(400).json({ error: 'Le prompt est requis' });
    }

    console.log(`Génération d'image avec le prompt: "${prompt}"`);

    // Utiliser le modèle stable-diffusion-v1 pour économiser des crédits
    const response = await fetch('https://api.stability.ai/v1/generation/stable-diffusion-v1-6/text-to-image', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${STABILITY_API_KEY}`
      },
      body: JSON.stringify({
        text_prompts: [
          {
            text: prompt,
            weight: 1
          }
        ],
        cfg_scale: 7,
        height: 512,
        width: 512,
        samples: 1,
        steps: 30
      })
    });

    if (!response.ok) {
      const error = await response.json();
      console.error('Erreur de l\'API Stability:', error);
      return res.status(response.status).json({ 
        error: 'Erreur lors de la génération de l\'image',
        details: error
      });
    }

    const data = await response.json();
    return res.json(data);
  } catch (error) {
    console.error('Erreur serveur:', error);
    return res.status(500).json({ error: 'Erreur serveur lors de la génération de l\'image' });
  }
});

// Servir les fichiers statiques (pour la production)
app.use(express.static('../'));

// Démarrer le serveur
app.listen(PORT, () => {
  console.log(`Serveur démarré sur http://localhost:${PORT}`);
});