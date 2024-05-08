<?php
session_start();

// Vérifier si l'utilisateur est connecté
if (!isset($_SESSION['user_id'])) {
    echo "User not logged in.";
    exit;
}

$userId = $_SESSION['user_id'];
$newScore = isset($_POST['score']) ? (int)$_POST['score'] : 0;

// Paramètres de connexion à la base de données
$host = 'localhost';
$dbname = 'snakebdd';
$username = 'root';
$password = ''; // Ajustez selon votre configuration

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Récupérer le meilleur score actuel de l'utilisateur
    $stmt = $pdo->prepare("SELECT UserBScore FROM users WHERE UserId = ?");
    $stmt->execute([$userId]);
    $currentScore = $stmt->fetchColumn();

    // Comparer et potentiellement mettre à jour le score
    if ($newScore > $currentScore) {
        $updateStmt = $pdo->prepare("UPDATE users SET UserBScore = ? WHERE UserId = ?");
        $updateStmt->execute([$newScore, $userId]);
        echo "Score updated to " . $newScore;
    } else {
        echo "New score not higher than current score of " . $currentScore;
    }
} catch (PDOException $e) {
    die("Database error: " . $e->getMessage());
}
?>
