<?php
require_once __DIR__ . '/../../includes/db.php';
require_once __DIR__ . '/../../includes/functions.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_response(['success' => false, 'message' => 'Methode non autorisee.'], 405);
}

$fullName = trim($_POST['full_name'] ?? '');
$email = trim($_POST['email'] ?? '');
$company = trim($_POST['company'] ?? '');
$sector = trim($_POST['sector'] ?? '');
$projectType = trim($_POST['project_type'] ?? '');
$budget = trim($_POST['budget'] ?? '');
$message = trim($_POST['message'] ?? '');

if ($fullName === '' || $email === '' || $message === '') {
    json_response(['success' => false, 'message' => 'Nom, email et message sont obligatoires.'], 422);
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    json_response(['success' => false, 'message' => 'Adresse email invalide.'], 422);
}

$stmt = $pdo->prepare('INSERT INTO contact_requests (full_name, email, company, sector, project_type, budget, message) VALUES (?, ?, ?, ?, ?, ?, ?)');
$stmt->execute([$fullName, $email, $company, $sector, $projectType, $budget, $message]);

json_response([
    'success' => true,
    'message' => 'Votre demande a bien ete envoyee. Nous vous recontacterons bientot.'
]);
