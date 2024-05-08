<?php
session_start(); // Démarrer la session au début du fichier

$host = 'localhost';
$dbname = 'snakebdd';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    die("Impossible de se connecter à la base de données: " . $e->getMessage());
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Création de la connexion
    $conn = new mysqli($host, $username, $password, $dbname);

    // Vérifier la connexion
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Récupération des données du formulaire
    $user = $_POST['username'];
    $pass = $_POST['password'];

    // Préparation de la requête SQL
    $sql = "SELECT UserId FROM users WHERE UserName=? AND UserPass=?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("ss", $user, $pass);
    $stmt->execute();
    $stmt->store_result();

    // Vérification de l'utilisateur
    if ($stmt->num_rows > 0) {
        $stmt->bind_result($userId);
        $stmt->fetch();
        $_SESSION['user_id'] = $userId;  // Stockage de l'ID utilisateur dans la session
        header("Location: index.php");  // Redirection vers index.php
        exit();
    } else {
        $error = "Invalid username or password";
    }

    $stmt->close();
    $conn->close();
}
?>


<!doctype html>
<html lang="en">
<head>
   <meta charset="UTF-8">
   <title>Animated Login Form</title>
   <link rel="stylesheet" href="./style.css">
</head>
<body>
<section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
   <div class="signin">
       <div class="content">
           <h2>Sign In</h2>
           <form action="login.php" method="post">
               <div class="form">
                   <div class="inputBox">
                       <input type="text" name="username" required>
                       <i>Username</i>
                   </div>
                   <div class="inputBox">
                       <input type="password" name="password" required>
                       <i>Password</i>
                   </div>
                   <?php if (!empty($error)): ?>
                    <h2>incorrect pass or incorrect name</h2>
                   <?php endif; ?>
                   <div class="links">
                        <a href="forgot.html">Forgot Password</a>
                        <a href="signup.php">Signup</a>
                    </div>
                   <div class="inputBox">
                       <input type="submit" value="Login">
                   </div>
               </div>
           </form>
       </div>
   </div>
</section>
</body>
</html>