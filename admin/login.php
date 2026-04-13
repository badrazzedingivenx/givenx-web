<?php
require_once __DIR__ . '/../includes/db.php';
require_once __DIR__ . '/../includes/functions.php';
start_secure_session();

if (is_admin_logged_in()) {
    redirect('dashboard.php');
}

$error = null;
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $email = trim($_POST['email'] ?? '');
    $password = $_POST['password'] ?? '';

    $stmt = $pdo->prepare('SELECT id, full_name, email, password_hash FROM admins WHERE email = ? LIMIT 1');
    $stmt->execute([$email]);
    $admin = $stmt->fetch();

    if ($admin && password_verify($password, $admin['password_hash'])) {
        $_SESSION['admin_id'] = $admin['id'];
        $_SESSION['admin_name'] = $admin['full_name'];
        redirect('dashboard.php');
    }

    $error = 'Email ou mot de passe incorrect.';
}
?>
<!doctype html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Connexion Admin</title>
    <style>
        body{font-family:Arial,sans-serif;background:#f3f4f6;margin:0;padding:40px}
        .card{max-width:420px;margin:50px auto;background:#fff;padding:24px;border-radius:14px;box-shadow:0 10px 30px rgba(0,0,0,.08)}
        input{width:100%;padding:12px;margin:8px 0 16px;border:1px solid #ddd;border-radius:10px}
        button{width:100%;padding:12px;background:#5b5cf0;color:#fff;border:none;border-radius:10px;cursor:pointer}
        .error{background:#fee2e2;color:#991b1b;padding:10px;border-radius:10px;margin-bottom:12px}
    </style>
</head>
<body>
<div class="card">
    <h2>Admin Givenx Tech</h2>
    <?php if ($error): ?>
        <div class="error"><?= e($error) ?></div>
    <?php endif; ?>
    <form method="post">
        <label>Email</label>
        <input type="email" name="email" required>
        <label>Mot de passe</label>
        <input type="password" name="password" required>
        <button type="submit">Se connecter</button>
    </form>
</div>
</body>
</html>
