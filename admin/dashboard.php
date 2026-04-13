<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';
require_admin();

$pendingCount = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE status = 'pending'")->fetchColumn();
$approvedCount = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE status = 'approved'")->fetchColumn();
$rejectedCount = (int)$pdo->query("SELECT COUNT(*) FROM reviews WHERE status = 'rejected'")->fetchColumn();
$contactCount = (int)$pdo->query("SELECT COUNT(*) FROM contact_requests")->fetchColumn();

$reviews = $pdo->query("SELECT * FROM reviews ORDER BY created_at DESC")->fetchAll();
$contacts = $pdo->query("SELECT * FROM contact_requests ORDER BY created_at DESC LIMIT 10")->fetchAll();
$message = get_flash('success');
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Dashboard Admin</title>
    <style>
        body{font-family:Arial,sans-serif;background:#f8fafc;margin:0;color:#111827}
        header{background:#111827;color:#fff;padding:18px 24px;display:flex;justify-content:space-between;align-items:center}
        .container{max-width:1200px;margin:24px auto;padding:0 16px}
        .grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-bottom:24px}
        .card{background:#fff;border-radius:16px;padding:18px;box-shadow:0 8px 24px rgba(0,0,0,.06)}
        table{width:100%;border-collapse:collapse;background:#fff;border-radius:16px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.06)}
        th,td{padding:12px;border-bottom:1px solid #e5e7eb;text-align:left;vertical-align:top}
        .btn{display:inline-block;padding:8px 10px;border-radius:10px;text-decoration:none;color:#fff;font-size:13px}
        .approve{background:#16a34a}.reject{background:#dc2626}.pending{color:#a16207}.approved{color:#166534}.rejected{color:#991b1b}
        .msg{background:#dcfce7;color:#166534;padding:12px;border-radius:12px;margin-bottom:16px}
        @media(max-width:900px){.grid{grid-template-columns:1fr 1fr}}
    </style>
</head>
<body>
<header>
    <strong>Admin Givenx Tech</strong>
    <div>Bonjour, <?= e($_SESSION['admin_name'] ?? 'Admin') ?> | <a href="logout.php" style="color:#fff">Deconnexion</a></div>
</header>
<div class="container">
    <?php if ($message): ?><div class="msg"><?= e($message) ?></div><?php endif; ?>
    <div class="grid">
        <div class="card"><h3>Avis en attente</h3><p><?= $pendingCount ?></p></div>
        <div class="card"><h3>Avis approuves</h3><p><?= $approvedCount ?></p></div>
        <div class="card"><h3>Avis refuses</h3><p><?= $rejectedCount ?></p></div>
        <div class="card"><h3>Demandes contact</h3><p><?= $contactCount ?></p></div>
    </div>

    <h2>Avis clients</h2>
    <table>
        <thead>
            <tr>
                <th>Client</th>
                <th>Note</th>
                <th>Avis</th>
                <th>Statut</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
        <?php foreach ($reviews as $review): ?>
            <tr>
                <td>
                    <strong><?= e($review['name']) ?></strong><br>
                    <small><?= e($review['company'] ?? '') ?></small>
                </td>
                <td><?= (int)$review['rating'] ?>/5</td>
                <td><?= nl2br(e($review['review'])) ?></td>
                <td class="<?= e($review['status']) ?>"><?= e($review['status']) ?></td>
                <td>
                    <a class="btn approve" href="review_action.php?id=<?= (int)$review['id'] ?>&action=approve">Accepter</a>
                    <a class="btn reject" href="review_action.php?id=<?= (int)$review['id'] ?>&action=reject">Refuser</a>
                </td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>

    <h2 style="margin-top:30px">Dernieres demandes de contact</h2>
    <table>
        <thead>
            <tr>
                <th>Nom</th>
                <th>Email</th>
                <th>Entreprise</th>
                <th>Projet</th>
                <th>Message</th>
            </tr>
        </thead>
        <tbody>
        <?php foreach ($contacts as $contact): ?>
            <tr>
                <td><?= e($contact['full_name']) ?></td>
                <td><?= e($contact['email']) ?></td>
                <td><?= e($contact['company'] ?? '') ?></td>
                <td><?= e($contact['project_type'] ?? '') ?></td>
                <td><?= nl2br(e($contact['message'])) ?></td>
            </tr>
        <?php endforeach; ?>
        </tbody>
    </table>
</div>
</body>
</html>
