CREATE DATABASE IF NOT EXISTS givenxtech CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE givenxtech;

CREATE TABLE IF NOT EXISTS admins (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(190) NOT NULL UNIQUE,
    password_hash VARCHAR(255) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS contact_requests (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    full_name VARCHAR(150) NOT NULL,
    email VARCHAR(190) NOT NULL,
    company VARCHAR(150) NULL,
    sector VARCHAR(120) NULL,
    project_type VARCHAR(150) NULL,
    budget VARCHAR(80) NULL,
    message TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS reviews (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    company VARCHAR(150) NULL,
    rating TINYINT UNSIGNED NOT NULL,
    review TEXT NOT NULL,
    status ENUM('pending', 'approved', 'rejected') NOT NULL DEFAULT 'pending',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO admins (full_name, email, password_hash)
VALUES (
    'Super Admin',
    'admin@givenxtech.com',
    '$2y$12$.A2hNBYRTGrMl9udNFfqueJ8oW2jJcoFUytoofi/IRlUk8aboeuv6'
)
ON DUPLICATE KEY UPDATE email = email;
