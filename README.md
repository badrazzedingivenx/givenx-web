# Backend PHP - Givenx Tech

Ce pack contient un backend PHP/MySQL simple pour le site montre dans vos captures.

## Fonctions incluses

- formulaire de contact en PHP
- gestion des avis clients
- moderation des avis par un administrateur
- connexion admin
- dashboard admin
- API JSON pour afficher les avis approuves

## Compte admin par defaut

- Email : `admin@givenxtech.com`
- Mot de passe : `Admin@12345`

## Installation

1. Copier le dossier dans `htdocs` ou `www`.
2. Creer une base MySQL puis importer `sql/schema.sql`.
3. Modifier `config/config.php` avec vos acces MySQL.
4. Ouvrir `admin/login.php` pour se connecter.

## Endpoints utiles

- `public/api/contact_submit.php`
- `public/api/review_submit.php`
- `public/api/reviews_list.php`

## Exemple integration formulaire contact

```html
<form action="/givenxtech_backend/public/api/contact_submit.php" method="POST">
  <input name="full_name" placeholder="Nom complet" required>
  <input name="email" type="email" placeholder="Email" required>
  <input name="company" placeholder="Entreprise">
  <input name="sector" placeholder="Secteur">
  <input name="project_type" placeholder="Type de projet">
  <input name="budget" placeholder="Budget">
  <textarea name="message" placeholder="Message"></textarea>
  <button type="submit">Envoyer</button>
</form>
```

## Exemple integration formulaire avis

```html
<form action="/givenxtech_backend/public/api/review_submit.php" method="POST">
  <input name="name" placeholder="Votre nom" required>
  <input name="company" placeholder="Entreprise">
  <select name="rating" required>
    <option value="5">5</option>
    <option value="4">4</option>
    <option value="3">3</option>
    <option value="2">2</option>
    <option value="1">1</option>
  </select>
  <textarea name="review" placeholder="Votre avis" required></textarea>
  <button type="submit">Envoyer</button>
</form>
```

## Notes

- Les avis envoyes arrivent avec le statut `pending`.
- L'admin peut accepter ou refuser chaque avis depuis le dashboard.
- Seuls les avis `approved` sortent dans `reviews_list.php`.
