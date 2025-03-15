# Backend pour l'application Générateur d'images avec Stable Diffusion

Ce serveur backend est conçu pour fonctionner avec l'interface web du projet claude_code_tout_seul. Il sert d'intermédiaire entre l'interface utilisateur et l'API de Stability AI, permettant de générer des images tout en gardant la clé API confidentielle.

## Configuration requise

- Node.js (version 16 ou plus récente)
- npm ou yarn

## Installation

1. Naviguez vers le dossier backend du projet
2. Installez les dépendances :

```bash
cd backend
npm install
```

## Configuration de l'environnement

1. Créez un fichier `.env` dans le dossier backend avec la structure suivante :

```
STABILITY_API_KEY=votre_clé_api_stability_ai
PORT=3000
```

2. Remplacez `votre_clé_api_stability_ai` par votre clé API Stability AI

## Lancement du serveur

Pour démarrer le serveur :

```bash
npm start
```

Le serveur sera accessible sur `http://localhost:3000` (ou sur le port spécifié dans votre fichier `.env`).

## Points d'API

### POST /generate-image

Génère une image à partir d'un prompt texte.

**Corps de la requête (JSON) :**
```json
{
  "prompt": "Votre description d'image ici"
}
```

**Réponse :**
- 200 OK : Retourne un objet JSON contenant les détails de l'image générée, y compris l'image en base64
- 400 Bad Request : Si le prompt est manquant ou invalide
- 500 Internal Server Error : En cas d'erreur serveur ou de problème avec l'API Stability AI

## Sécurité

- La clé API est stockée dans un fichier `.env` qui n'est pas inclus dans le contrôle de version
- Les requêtes CORS sont gérées pour permettre les connexions depuis le frontend
- Assurez-vous de ne jamais exposer votre clé API publiquement

## Notes

Cette application utilise le modèle Stable Diffusion v1.6 de Stability AI, qui est un modèle plus ancien pour économiser des crédits.