# 🚀 FAVICON - GUIDE RAPIDE

## 📋 CE QU'IL TE FAUT FAIRE (5 minutes)

### Étape 1 : Générer le Favicon ⚡

1. Va sur : **https://favicon.io/favicon-converter/**
2. Clique sur "Choose PNG"
3. Upload ton fichier **Logo_blanc.png**
4. Clique sur "Download"
5. Tu télécharges un fichier ZIP

### Étape 2 : Extraire les Fichiers 📦

1. Ouvre le ZIP téléchargé
2. Tu vas trouver ces fichiers :
   - `favicon.ico` ⭐ (Le plus important)
   - `favicon-16x16.png`
   - `favicon-32x32.png`
   - `apple-touch-icon.png`
   - `android-chrome-192x192.png`
   - `android-chrome-512x512.png`
   - `site.webmanifest`

### Étape 3 : Placer dans ton Projet 📁

**IMPORTANT : Ces fichiers vont À LA RACINE (pas dans /images/) !**

```
MCRestor30/
├── favicon.ico              ← NOUVEAU (racine)
├── favicon-16x16.png        ← NOUVEAU
├── favicon-32x32.png        ← NOUVEAU
├── apple-touch-icon.png     ← NOUVEAU
├── android-chrome-192x192.png ← NOUVEAU
├── android-chrome-512x512.png ← NOUVEAU
├── site.webmanifest         ← NOUVEAU
├── index.html               ← Tu as déjà (déjà mis à jour)
├── style.css
├── script.js
└── images/
    └── Logo_blanc.png
```

### Étape 4 : Remplacer index.html 🔄

Utilise le fichier **index.html** que je t'ai donné, il a déjà le bon code favicon !

Le code dans le `<head>` est déjà correct :
```html
<link rel="icon" type="image/x-icon" href="/favicon.ico">
<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
<!-- etc... -->
```

### Étape 5 : Push sur GitHub 🚀

```bash
# Dans GitHub Desktop :
1. Tu verras tous les nouveaux fichiers favicon
2. Message : "✨ Ajout favicon MCRestor30"
3. Commit to main
4. Push origin
```

### Étape 6 : Vider le Cache 🔄

**SUPER IMPORTANT :**
1. Aller sur le site
2. Faire **Ctrl + Shift + Delete**
3. Cocher "Images et fichiers en cache"
4. Cliquer "Effacer les données"
5. Ou faire **Ctrl + F5** (hard refresh)

---

## ✅ RÉSULTAT

Après ces étapes, le logo MCRestor30 va apparaître :
- ✅ Dans l'onglet du navigateur (petit à côté du titre)
- ✅ Dans les favoris
- ✅ Sur mobile si ajouté à l'écran d'accueil
- ✅ Partout où ton site est référencé

---

## 🆘 SI ÇA MARCHE PAS

### Le favicon ne s'affiche pas ?
1. **Vider le cache** : Ctrl + Shift + Delete
2. **Fermer le navigateur** complètement
3. **Rouvrir** et retester
4. **Attendre 5 minutes** (propagation GitHub)

### Toujours l'ancien logo ?
1. Vérifier que `favicon.ico` est bien à la racine
2. Vérifier que le code HTML est bon
3. Tester en **navigation privée** (Ctrl + Shift + N)

---

## 📸 CAPTURE D'ÉCRAN

Tu devrais voir ton logo :
- À gauche du titre dans l'onglet
- Dans les favoris
- Dans l'historique

---

## 🎯 RÉCAP ULTRA-SIMPLE

```
1. Aller sur favicon.io
2. Upload Logo_blanc.png
3. Download ZIP
4. Extraire tout à la racine de MCRestor30
5. Remplacer index.html
6. Push sur GitHub
7. Vider le cache
8. ✅ C'est BON !
```

---

**Tout est prêt, tu n'as plus qu'à suivre ces étapes ! 🔥**
