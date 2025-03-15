# Claude Code Tout Seul

Interface web pour générer des images avec Stable Diffusion via l'API de Stability AI.

## Structure du projet

Ce projet est composé de deux parties :
- **Frontend** : Interface web en HTML/CSS/JavaScript pour saisir des prompts et afficher les images générées
- **Backend** : Serveur Node.js qui gère la communication avec l'API Stability AI tout en protégeant la clé API

## Fonctionnalités

- Interface simple pour entrer un prompt textuel
- Génération d'images via l'API Stability AI (modèle Stable Diffusion v1.6)
- Prévisualisation des images générées en temps réel
- Option de téléchargement des images générées
- Protection de la clé API grâce au backend

## Installation et configuration

### 1. Backend (Node.js)

```bash
# Se positionner dans le dossier backend
cd backend

# Installer les dépendances
npm install

# Créer le fichier .env (basé sur .env.example)
cp .env.example .env

# Éditer le fichier .env et ajouter votre clé API
# STABILITY_API_KEY=votre_clé_api_ici

# Démarrer le serveur
npm start
```

Le serveur backend sera accessible sur http://localhost:3000.

### 2. Frontend

Aucune installation n'est nécessaire pour le frontend.

Si le serveur backend est en cours d'exécution, il sert automatiquement les fichiers frontend à la racine (http://localhost:3000).

Alternativement, vous pouvez ouvrir le fichier `index.html` directement dans votre navigateur.

## Comment utiliser

1. Lancez d'abord le serveur backend comme indiqué ci-dessus
2. Ouvrez votre navigateur et accédez à http://localhost:3000
3. Entrez votre description d'image dans le champ texte
4. Cliquez sur "Générer l'image"
5. Attendez que l'image soit générée et s'affiche
6. Vous pouvez télécharger l'image en cliquant sur le bouton de téléchargement

## Remarques techniques

- L'application utilise le modèle Stable Diffusion v1.6 (un modèle plus ancien) pour économiser des crédits
- La clé API est gérée par le backend et n'est jamais exposée côté client
- Le fichier `.env` contenant la clé API est dans le `.gitignore` et ne doit jamais être commité
- Le backend utilise Express.js pour le serveur et node-fetch pour les requêtes API

## Sécurité

**Important** : Ne jamais commiter le fichier `.env` contenant votre clé API. Utilisez toujours le fichier `.env.example` comme modèle et créez votre propre fichier `.env` localement.