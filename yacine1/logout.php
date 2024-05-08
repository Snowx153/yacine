<?php
session_start(); // Démarrer la session

// Vider le tableau de session
session_unset();

// Détruire la session
session_destroy();

// Rediriger l'utilisateur vers index.html
header("Location: index.php");
exit();
?>
