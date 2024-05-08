<?php
session_start(); // Démarrer la session

// Vérifie si l'utilisateur est connecté
if (isset($_SESSION['user_id']) && !empty($_SESSION['user_id'])) {
    $host = 'localhost';
    $dbname = 'snakebdd';
    $username = 'root';
    $password = '';
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
        // Requête pour obtenir les 10 meilleurs scores
        $stmt = $pdo->prepare("SELECT UserName, UserBScore FROM users ORDER BY UserBScore DESC LIMIT 10");
        $stmt->execute();
        $topScores = $stmt->fetchAll(PDO::FETCH_ASSOC);
    } catch (PDOException $e) {
        die("Impossible de se connecter à la base de données: " . $e->getMessage());
    }
    
    try {
        $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
        $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        $stmt = $pdo->prepare("SELECT * FROM users WHERE UserId = ?");
        $stmt->execute([$_SESSION['user_id']]);
        $user = $stmt->fetch(PDO::FETCH_ASSOC);

        $userStatus = "Logged In";
        $username = $user['UserName'];
        $userScore = $user['UserBScore'];
    } catch (PDOException $e) {
        die("Impossible de se connecter à la base de données: " . $e->getMessage());
    }
} else {
    $userStatus = "Utilisateur non connecté";
}
?>
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>
    
    <link rel="stylesheet" href="./css/style.css">
    <script src="main.js" defer></script>
    <audio id="gameOverSound" src="snd/son.mp3"></audio>
    

</head> 

   
<body> <!-- partial:index.partial.html --> 
   
 <section> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> <span></span> 
 
  <div class="signin"> 

   <div class="content"> 

    <h2>Snake Game</h2> 

    <div class="form"> 

        <?php if ($userStatus == "Logged In"): ?>
        <h2>Name: <?php echo htmlspecialchars($username); ?></h2>
        <h2>Score: <?php echo htmlspecialchars($userScore); ?></h2>
        <a href="logout.php" class="button">Log Out</a>
    <?php else: ?>
        <a href="login.php" class="button">Log In</a>
        <a href="signup.php" class="button">Sign Up</a>
    <?php endif; ?>
        </div>
        
        

     </div> 

    </div> 

   
</div> 



<canvas id="gameCanvas" width="1200" height="700"></canvas>


 </section> <!-- partial --> 

</body>

<div class="help-container">
    <h2 class="help-title">Page d'Aide</h2>
    <div class="key-info">
        <div class="key">↑</div>
        <p><strong>Flèche Haut</strong>: Déplacer vers le haut</p>
    </div>
    <div class="key-info">
        <div class="key">↓</div>
        <p><strong>Flèche Bas</strong>: Déplacer vers le bas</p>
    </div>
    
    <div class="key-info">
        <div class="key">→</div>
        <p><strong>Flèche Droite</strong>: Déplacer vers la droite</p>
    </div>
    <div class="key-info">
        <div class="key">←</div>
        <p><strong>Flèche Gauche</strong>: Déplacer vers la gauche</p>
    </div>
    <div class="key-info">
        <div class="key">P</div>
        <p><strong>P</strong>: Mettre en pause le jeu</p>
    </div>
    <div class="key-info">
        <div class="key">space</div>
        <p><strong></strong>: Recommencer le jeu</p>
    
    </div>
    <div class="score-container">
        <div class="score-title">User: <span id="userName">Username</span></div>
        <div class="score-title">Best score: <span id="bestScore">0</span></div>
    </div>
    
        </button>
    </form>
    
    
        <button class="quitterButton" onclick="window.location.href='index.php';">
            Quitter
            <img src="img/quitter.png" alt="Quitter">
        
        </button>
        
        <button class="musicButton">Play Music</button>
        <audio id="backgroundMusic" loop>
            <source src="snd/jeuxsound.mp3" type="audio/mp3">
            Votre navigateur ne supporte pas l'élément audio.
        </audio>
       
            <button id="quitButton" style="position: absolute; top: 10px; left: 10px; display: none; background-color: red; color: black;">
                Quitter
                <img src="img/quitter.png" alt="Quitter" style="width: 30px; height: 30px; margin-left: 5px; vertical-align: middle;">
                
            </button>
            <div class="score-container">
            <h1>Top 10 Scores</h1>
            <?php $rank = 1; foreach ($topScores as $score): ?>
            <div class="score-entry">
                <div class="score-rank">#<?php echo $rank++; ?></div>
                <div class="score-user">User: <?php echo htmlspecialchars($score['UserName']); ?></div>
                <div class="score-score">Score: <?php echo htmlspecialchars($score['UserBScore']); ?></div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
    
</div>

  
<link rel="stylesheet" href="./css/style2.css">
<div id="main-window" class="main-window">

        <!-- Menu -->
        <div class="menu">
            <h2 class="menu__title">menu</h2>
            
            <button id ="startButton" class="menu__commencer">Commencer</button>
            
            <button class="menu__themes">Themes</button>
            <button class="menu__skins">Skins</button>
        </div>

        <!-- Game -->
        <div class="game">
            
        </div>

        <!-- Themes -->
        <div class="themes" hidden>
            <div class="themes__inner">
                <div class="themes__item">
                    <img src="./assets/themes/green.png" alt="" 
                    style="width: 300px; height: 225px; 
                    border: 3px solid green;
                    border-radius: 10px;">
                    <button class="themes__item-button" 
                    color="green" activated="true"></button>
                </div>
                <div class="themes__item">
                    <img src="./assets/themes/blue.png" alt="" 
                    style="width: 300px; height: 225px; 
                    border: 3px solid green;
                    border-radius: 10px;">
                    <button class="themes__item-button"
                    color="blue" activated="false"></button>
                </div>
                <div class="themes__item">
                    <img src="./assets//themes/white.png" alt="" 
                    style="width: 300px; height: 225px; 
                    border: 3px solid green;
                    border-radius: 10px;">
                    <button class="themes__item-button"
                    color="white" activated="false"></button>
                </div>
                <div class="themes__item">
                    <img src="./assets//themes/black.png" alt="" 
                    style="width: 300px; height: 225px; 
                    border: 3px solid green;
                    border-radius: 10px;">
                    <button class="themes__item-button"
                    color="black" activated="false"></button>
                </div>
            </div>
            <button class="themes__back">back</button>
        </div>

        <!-- Skins -->
        <div class="skins" hidden>
            <!-- Snake -->
            <div class="skins__inner">
                <div class="skins__item">
                    <img src="./assets/skins/snake/green.png" alt="" 
                    style="width: 100px; height: 100px; 
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="true" snake="green"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/yellow.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" snake="yellow"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/white.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" snake="white"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/black.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" snake="black"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/fiery.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" snake="fiery"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/rubik.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" snake="rubik"></button>
                </div>
            </div>
            <!-- Head -->
            <div class="skins__inner">
                <div class="skins__item">
                    <img src="./assets/skins/snake/Chocolate.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="true" head="snake"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/orange.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" head="gru"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/CornflowerBlue.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" head="steve"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/LightCoral.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" head="junk"></button>
                </div>
            </div>
            <!-- Food -->
            <div class="skins__inner">
                <div class="skins__item">
                    <img src="./assets/skins/snake/gris.jpg" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="true" food="apple"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/blue.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" food="penis"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/Crimson.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" food="minion"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/BlueViolet.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" food="burger"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/MediumSeaGreen.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" food="creeper"></button>
                </div>
                <div class="skins__item">
                    <img src="./assets/skins/snake/CornflowerBlue.png" alt="" 
                    style="width: 100px; height: 100px;
                    border: 3px solid green; border-radius: 10px;">
                    <button class="skins__button"
                    activated="false" food="marijuana"></button>
                </div>
            </div>
            <button class="skins__back">back</button>
        </div>

        <!-- Losing window -->
        <div class="losing" hidden>
            <h2 class="losing__title">GAME OVER</h2>
            <button class="losing__restart">restart</button>
            <button class="losing__menu">menu</button>
        </div>

        <!-- Winning window -->
        <div class="winning" hidden style="opacity: 0; 
        transition: all 1.5s linear;">
            <h1 class="winning__title" style="margin-top: 80px;">
                Ты ебанутый?
            </h1>
            <img src="./assets/win/polo.jpg" style="display: block; width: 100%; height: 400px; max-width: 90px; margin: 80px auto 0;">
            <button class="winning__button">да</button>
        </div>

    </div>
    <script>
        document.addEventListener('DOMContentLoaded', function() {
            const musicButton = document.querySelector('.musicButton');
            const backgroundMusic = document.getElementById('backgroundMusic');

            musicButton.addEventListener('click', function() {
                if (backgroundMusic.paused) {
                    backgroundMusic.play().catch(e => {
                        console.error('Erreur de lecture:', e);
                        alert("La lecture automatique a été bloquée par le navigateur. Veuillez cliquer à nouveau ou ajuster les paramètres de votre navigateur pour permettre la lecture.");
                    });
                } else {
                    backgroundMusic.pause();
                }
            });
        });
    </script>
    <script src="scripts.js"></script>
</body>
</html>