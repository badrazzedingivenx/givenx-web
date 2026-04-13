<?php
require_once __DIR__ . '/../../includes/db.php';
require_once __DIR__ . '/../../includes/functions.php';

$stmt = $pdo->query("SELECT id, name, company, rating, review, created_at FROM reviews WHERE status = 'approved' ORDER BY created_at DESC");
$reviews = $stmt->fetchAll();

json_response([
    'success' => true,
    'data' => $reviews
]);
