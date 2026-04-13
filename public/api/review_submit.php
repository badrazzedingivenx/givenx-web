<?php
require_once __DIR__ . '/../../includes/db.php';
require_once __DIR__ . '/../../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
}

$name = trim($_POST['name'] ?? '');
$company = trim($_POST['company'] ?? '');
$rating = (int)($_POST['rating'] ?? 0);
$review = trim($_POST['review'] ?? '');

if ($name === '' || $review === '' || $rating < 1 || $rating > 5) {
    json_response(['success' => false, 'message' => 'Nom, avis et note valide sont obligatoires.'], 422);
}

$stmt = $pdo->prepare('INSERT INTO reviews (name, company, rating, review, status) VALUES (?, ?, ?, ?, ?)');
$stmt->execute([$name, $company, $rating, $review, 'pending']);

json_response([
    'success' => true,
    'message' => 'Merci. Votre avis a ete envoye pour moderation.'
]);
