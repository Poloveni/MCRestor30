# MCRestor30 - Site Vitrine

Site vitrine pour l'atelier de thermolaquage, sablage et aérogommage MCRestor30.

## 📁 Structure du projet

```
MCRestor30/
├── index.html          # Page principale
├── style.css           # Styles CSS
├── script.js           # Fonctionnalités JavaScript
├── images/             # Dossier des photos (à créer)
│   ├── cadre-honda-rouge.webp
│   ├── jante-violette.jpg
│   └── ... (toutes les autres images)
└── README.md           # Ce fichier
```

## 🚀 Installation

### 1. Télécharger les fichiers

Téléchargez tous les fichiers et le dossier `images/` dans votre dossier **MCRestor30** cloné depuis GitHub Desktop.

### 2. Structure à respecter

Placez les fichiers ainsi :
```
MCRestor30/
├── index.html
├── style.css
├── script.js
└── images/
    └── (tous les fichiers images)
```

### 3. Pousser vers GitHub

1. Ouvrez **GitHub Desktop**
2. Vous verrez tous les fichiers dans "Changes"
3. Écrivez un message : `"Ajout des photos réelles"`
4. Cliquez sur **Commit to main**
5. Cliquez sur **Push origin**

### 4. Attendre la mise à jour

Attendez 1-2 minutes, puis visitez :
**https://poloveni.github.io/MCRestor30/**

## 🎨 Personnalisation

### Modifier les couleurs

Dans `style.css`, lignes 8-14 :
```css
:root {
    --primary: #ff6b00;      /* Couleur principale (orange) */
    --secondary: #1a1a1a;    /* Couleur secondaire (noir) */
    --accent: #ffaa00;       /* Couleur d'accent */
}
```

### Modifier les informations de contact

Dans `index.html`, section `#contact`, remplacez :
- `06 XX XX XX XX` par le vrai numéro
- `contact@mcrestor30.fr` par le vrai email
- Ajoutez les liens Facebook/Instagram

### Ajouter plus de photos

1. Ajoutez vos photos dans le dossier `images/`
2. Dans `index.html`, section galerie, ajoutez :
```html
<div class="gallery-item">
    <img src="images/votre-photo.jpg" alt="Description">
    <div class="gallery-overlay">
        <p>Légende de la photo</p>
    </div>
</div>
```

## 📧 Support

Pour toute question, contactez Paul sur Discord ou par mail.

## 🔥 Fait avec passion par Dépannage PC Gard
