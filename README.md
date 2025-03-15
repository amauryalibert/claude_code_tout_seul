# Claude Code Tout Seul

Interface web pour générer des images avec Stable Diffusion.

## Fonctionnalités

- Interface simple pour entrer un prompt textuel
- Génération d'images via l'API Stability AI
- Prévisualisation des images générées
- Option de téléchargement des images générées

## Installation et configuration

### Frontend

Le frontend est composé de fichiers HTML/CSS/JavaScript purs et peut être servi par n'importe quel serveur web, ou ouvert directement dans un navigateur.

### Backend (requis)

Pour que l'application fonctionne, vous devez également configurer le backend qui gère la communication avec l'API Stability AI. Le backend est nécessaire pour protéger votre clé API.

1. Clonez le dépôt backend disponible dans le dossier `/Users/amaury/Desktop/claude_code_tout_seul_backend`
2. Suivez les instructions dans le README.md du backend pour l'installation et la configuration

## Comment utiliser

1. Lancez d'abord le serveur backend (voir les instructions dans le dossier backend)
2. Ouvrez `index.html` dans votre navigateur (ou déployez les fichiers sur un serveur web)
3. Entrez votre description d'image dans le champ texte
4. Cliquez sur "Générer l'image"
5. Attendez que l'image soit générée et s'affiche
6. Vous pouvez télécharger l'image en cliquant sur le bouton de téléchargement

## Remarques techniques

- L'application utilise le modèle Stable Diffusion v1.6 (un modèle plus ancien) pour économiser des crédits
- La clé API est gérée par le backend et n'est jamais exposée côté client
- Les requêtes sont envoyées au serveur backend, qui communique avec l'API Stability AI
- Le backend est configuré pour fonctionner sur http://localhost:3000 par défaut