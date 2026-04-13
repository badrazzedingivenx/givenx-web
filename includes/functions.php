<?php
function start_secure_session(): void
{
    $config = require __DIR__ . '/../config/config.php';
    if (session_status() === PHP_SESSION_NONE) {
        session_name($config['app']['session_name']);
        session_start();
    }
}

function is_admin_logged_in(): bool
{
    start_secure_session();
    return !empty($_SESSION['admin_id']);
}

function require_admin(): void
{
    if (!is_admin_logged_in()) {
        header('Location: login.php');
        exit;
    }
}

function e(string $value): string
{
    return htmlspecialchars($value, ENT_QUOTES, 'UTF-8');
}

function redirect(string $url): void
{
    header('Location: ' . $url);
    exit;
}

function set_flash(string $key, string $message): void
{
    start_secure_session();
    $_SESSION['flash'][$key] = $message;
}

function get_flash(string $key): ?string
{
    start_secure_session();
    if (!isset($_SESSION['flash'][$key])) {
        return null;
    }
    $message = $_SESSION['flash'][$key];
    unset($_SESSION['flash'][$key]);
    return $message;
}

function json_response(array $data, int $status = 200): void
{
    http_response_code($status);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_UNESCAPED_SLASHES);
    exit;
}
