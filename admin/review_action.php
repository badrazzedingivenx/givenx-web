<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';
require_admin();

$id = (int)($_GET['id'] ?? 0);
$action = $_GET['action'] ?? '';
$status = $action === 'approve' ? 'approved' : ($action === 'reject' ? 'rejected' : null);

if ($id > 0 && $status !== null) {
    $stmt = $pdo->prepare('UPDATE reviews SET status = ? WHERE id = ?');
    $stmt->execute([$status, $id]);
    set_flash('success', 'Le statut de l\'avis a ete mis a jour.');
}

redirect('dashboard.php');
