
const mainWindow = document.querySelector('.main-window');

const menu = document.querySelector('.menu');

const themesBtn = document.querySelector('.menu__themes');
const skinsBtn = document.querySelector('.menu__skins');


const themesWindow = document.querySelector('.themes');
const backFromThemesBtn = document.querySelector('.themes__back');
const setGreenThemeBtn = document.querySelector('[color="green"]');
const setBlueThemeBtn = document.querySelector('[color="blue"]');
const setWhiteThemeBtn = document.querySelector('[color="white"]');
const setBlackThemeBtn = document.querySelector('[color="black"]');

const skinsWindow = document.querySelector('.skins');
const backFromSkinsBtn = document.querySelector('.skins__back');
//
const setGreenSnakeBtn = document.querySelector('[snake="green"]');
const setYellowSnakeBtn = document.querySelector('[snake="yellow"]');
const setRubikSnakeBtn = document.querySelector('[snake="rubik"]');
const setFierySnakeBtn = document.querySelector('[snake="fiery"]');
const setWhitenSnakeBtn = document.querySelector('[snake="white"]');
const setBlackSnakeBtn = document.querySelector('[snake="black"]');
//
const setSnakeHeadBtn = document.querySelector('[head="snake"]');
const setGruHeadBtn = document.querySelector('[head="gru"]');
const setSteveHeadBtn = document.querySelector('[head="steve"]');
const setJunkHeadBtn = document.querySelector('[head="junk"]');
//
const setAppleFoodBtn = document.querySelector('[food="apple"]');
const setPenisFoodBtn = document.querySelector('[food="penis"]');
const setMinionFoodBtn = document.querySelector('[food="minion"]');
const setBurgerFoodBtn = document.querySelector('[food="burger"]');
const setCreeperFoodBtn = document.querySelector('[food="creeper"]');
const setMarijuanaFoodBtn = document.querySelector('[food="marijuana"]');

const mainTitle = document.querySelector('.title');
const winningTitle = document.querySelector('.winning__title');
const menuTitle = document.querySelector('.menu__title');

const game = document.querySelector('.game');

const losingWindow = document.querySelector('.losing');
const losingTitle = document.querySelector('.losing__title');
const restartBtn = document.querySelector('.losing__restart');
const backFromLosingWindowBtn = document.querySelector('.losing__menu');

const winningWindow = document.querySelector('.winning');
const winningBtn = document.querySelector('.winning__button');
//skins button//
skinsBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 1000px;
        height: 750px;
        margin-top: 40px;
        border-radius: 0;
    `;
    saveTheme(theme);
    menu.hidden = true;
    setTimeout(() => skinsWindow.hidden = false, 500);
}
//button back skins//
backFromSkinsBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `;
    saveTheme(theme);
    skinsWindow.hidden = true;
    menu.hidden = false;
}
//couleur seprpent//
let snakeSkin = 'green';
setGreenSnakeBtn.onclick = function() {
    snakeSkin = 'green';
    setGreenSnakeBtn.setAttribute('activated', 'true');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
}
setYellowSnakeBtn.onclick = function() {
    snakeSkin = 'yellow';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'true');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');;
    
}
setRubikSnakeBtn.onclick = function() {
    snakeSkin = 'aqua';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'true');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setFierySnakeBtn.onclick = function() {
    snakeSkin = 'red';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'true');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setWhitenSnakeBtn.onclick = function() {
    snakeSkin = 'white';
        setGreenSnakeBtn.setAttribute('activated', 'false');
        setYellowSnakeBtn.setAttribute('activated', 'false');
        setRubikSnakeBtn.setAttribute('activated', 'false');
        setFierySnakeBtn.setAttribute('activated', 'false');
        setWhitenSnakeBtn.setAttribute('activated', 'true');
        setBlackSnakeBtn.setAttribute('activated', 'false')
        setSnakeHeadBtn.setAttribute('activated', 'false');
        setGruHeadBtn .setAttribute('activated', 'false');
        setSteveHeadBtn.setAttribute('activated', 'false');
        setJunkHeadBtn.setAttribute('activated', 'false');
        setAppleFoodBtn.setAttribute('activated', 'false');
        setPenisFoodBtn.setAttribute('activated', 'false');
        setMinionFoodBtn.setAttribute('activated', 'false');
        setBurgerFoodBtn.setAttribute('activated', 'false');
        setCreeperFoodBtn.setAttribute('activated', 'false');
        setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setBlackSnakeBtn.onclick = function() {
    snakeSkin = 'black';
        setGreenSnakeBtn.setAttribute('activated', 'false');
        setYellowSnakeBtn.setAttribute('activated', 'false');
        setRubikSnakeBtn.setAttribute('activated', 'false');
        setFierySnakeBtn.setAttribute('activated', 'false');
        setWhitenSnakeBtn.setAttribute('activated', 'false');
        setBlackSnakeBtn.setAttribute('activated', 'true')
        setSnakeHeadBtn.setAttribute('activated', 'false');
        setGruHeadBtn .setAttribute('activated', 'false');
        setSteveHeadBtn.setAttribute('activated', 'false');
        setJunkHeadBtn.setAttribute('activated', 'false');
        setAppleFoodBtn.setAttribute('activated', 'false');
        setPenisFoodBtn.setAttribute('activated', 'false');
        setMinionFoodBtn.setAttribute('activated', 'false');
        setBurgerFoodBtn.setAttribute('activated', 'false');
        setCreeperFoodBtn.setAttribute('activated', 'false');
        setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
//
setSnakeHeadBtn.onclick = function() {
    snakeSkin = 'Chocolate';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'true');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setGruHeadBtn .onclick = function() {
    snakeSkin = 'orange';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'true');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setSteveHeadBtn.onclick = function() {
    snakeSkin = ' DeepPink';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'true');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setJunkHeadBtn.onclick = function() {
    snakeSkin = 'LightCoral';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'true');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
//
setAppleFoodBtn.onclick = function() {
    snakeSkin = 'gray';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'true');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');

    
}
setPenisFoodBtn.onclick = function() {
    snakeSkin = 'blue';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'true');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setMinionFoodBtn.onclick = function() {
    snakeSkin = 'Crimson';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'true');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setBurgerFoodBtn.onclick = function() {
    snakeSkin = 'BlueViolet';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'true');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setCreeperFoodBtn.onclick = function() {
    snakeSkin = 'MediumSeaGreen';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'true');
    setMarijuanaFoodBtn.setAttribute('activated', 'false');
    
}
setMarijuanaFoodBtn.onclick = function() {
    snakeSkin = 'black';
    setGreenSnakeBtn.setAttribute('activated', 'false');
    setYellowSnakeBtn.setAttribute('activated', 'false');
    setRubikSnakeBtn.setAttribute('activated', 'false');
    setFierySnakeBtn.setAttribute('activated', 'false');
    setWhitenSnakeBtn.setAttribute('activated', 'false');
    setBlackSnakeBtn.setAttribute('activated', 'false')
    setSnakeHeadBtn.setAttribute('activated', 'false');
    setGruHeadBtn .setAttribute('activated', 'false');
    setSteveHeadBtn.setAttribute('activated', 'false');
    setJunkHeadBtn.setAttribute('activated', 'false');
    setAppleFoodBtn.setAttribute('activated', 'false');
    setPenisFoodBtn.setAttribute('activated', 'false');
    setMinionFoodBtn.setAttribute('activated', 'false');
    setBurgerFoodBtn.setAttribute('activated', 'false');
    setCreeperFoodBtn.setAttribute('activated', 'false');
    setMarijuanaFoodBtn.setAttribute('activated', 'true');
}

window.onload = function() {
    
    var canvasWidth = 900; // Largeur du canvas
    var canvasHeight = 600; // Hauteur du canvas
    var blocksize = 30; // Taille de chaque bloc
    var ctx; // Contexte du canvas

    var delay = 100; // Délai entre les mises à jour du jeu (en millisecondes)
    var snakee; // Objet représentant le serpent
    var apples = []; // Tableau contenant les pommes
    var oranges = []; // Tableau contenant les pommes oranges
    var dangerousApple; // Pomme dangereuse
    var widthInBlocks = canvasWidth / blocksize; // Largeur du canvas en blocs
    var heightInBlocks = canvasHeight / blocksize; // Hauteur du canvas en blocs
    var score; // Score du joueur
    var timeout; // Référence au délai d'actualisation du canvas

    var gameStarted = false; // Indique si le jeu a démarré ou non
    
 

    // UI Elements
    var startButton = document.getElementById("startButton");
    var quitButton = document.getElementById("quitButton");


    startButton.addEventListener('click', function() {
        gameStarted = true; // Met à jour le statut du jeu
        updateVisibility();
        startGame();
    });

    quitButton.addEventListener("click", function() {
        gameStarted = false; // Met à jour le statut du jeu
        quitGame();
    });

   
    function updateVisibility() {
        if (gameStarted) {
            mainWindow.style.display = 'none'; // Cache le menu principal si le jeu a commencé
        } else {
            mainWindow.style.display = 'block'; // Affiche le menu principal si le jeu n'a pas commencé
        }
    }

    
   
    
    

    function startGame() {
        // Masquer la section d'animation et le menu principal
        document.querySelector('section').style.display = 'none';
        mainWindow.style.display = 'none';

        // Afficher le canvas du jeu
        gameCanvas.style.display = 'block';

        // Changer le fond pour le jeu
        document.body.style.backgroundImage = "url('img/snakegame2.jpg')";

       

        // Initialiser le jeu
        init();
    }
//best score//
   function updateUserInfo(username, bestScore) {
    const userNameElement = document.getElementById('userName');
    const bestScoreElement = document.getElementById('bestScore');
    
    userNameElement.textContent = username;
    bestScoreElement.textContent = bestScore;
}

// Exemple d'utilisation
updateUserInfo('Alice', 120); // Met à jour le nom d'utilisateur à 'Alice' et le meilleur score à '120'

    
 // Gestion de l'événement pour la touche "P"
 document.addEventListener("keydown", function handleKeyDown(e) {
    if (e.key === "p" || e.key === "P") {
        e.preventDefault(); // Empêcher le comportement par défaut de la touche "P"
        pauseGame();
    }
});
function drawPauseText() {
    ctx.save();
    ctx.font = "bold 40px sans-serif";
    ctx.fillStyle = "red"; // Couleur du texte en rouge
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("PAUSE", canvasWidth / 2, canvasHeight / 2);
    ctx.restore();
}

function pauseGame() {
    if (gameStarted) {
        gameStarted = false;
        clearTimeout(timeout); // Arrêter le délai d'actualisation du canvas
        drawPauseText(); // Afficher le texte "PAUSE" en rouge
    } else {
        gameStarted = true;
        refreshCanvas(); // Reprendre le jeu
    }
}

function quitGame() {
    // Afficher la section d'animation et le menu principal
    document.querySelector('section').style.display = 'block';
    mainWindow.style.display = 'block';

    // Masquer le canvas du jeu et le bouton Quitter
    gameCanvas.style.display = 'none';
    document.getElementById('quitGameButton').style.display = 'none';

    // Réinitialiser le fond
    document.body.style.backgroundImage = '';

    resetGame();
}

   

function init() {
    var canvas = document.createElement('canvas');
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;
    canvas.style.border = "20px solid Crimson";
    canvas.style.margin = "10px auto";
    canvas.style.display = "block";
    canvas.style.backgroundColor = theme;
    canvas.focus();
    document.body.appendChild(canvas);
    ctx = canvas.getContext('2d');
    apples.push(new Apple([11, 10], false)); // La première pomme est rouge
    apples.push(new Apple([20, 10], true)); // La deuxième pomme est verte
    oranges.push(new OrangeApple([15, 15])); // Ajouter une pomme orange
    dangerousApple = new DangerousApple([10, 11]);
    snakee = new Snake([[6, 4], [5, 4], [4, 4]], "right");
    score = 0;
    refreshCanvas();
}
    function refreshCanvas() {
        if (!gameStarted) return;

        snakee.advance();
        if (snakee.checkCollision()) {
            gameOver();
            return;
        }  else {
            // Incremental speed increase based on score
            var maxSpeed = 50; // Maximum speed (in milliseconds)
            var speedIncrement = 5; // Amount of speed increase per score
            delay = Math.max(maxSpeed, 100 - (score * speedIncrement)); // Limit speed increase
    
            // Handling apple and orange apple eating
            for (var i = 0; i < apples.length; i++) {
                if (snakee.isEatingApple(apples[i])) {
                    if (apples[i].isRed) {
                        gameOver();
                        return;
                    }
                    score++;
                    resetApplesPosition();
                    // Increase speed when eating apples
                    delay -= 10; // Adjust the decrement value to control speed increase
                }
            }

            for (var i = 0; i < oranges.length; i++) {
                if (snakee.isEatingOrangeApple(oranges[i])) {
                    // Générer un nombre aléatoire entre 0 et 2 inclus
                    var randomEffect = Math.floor(Math.random() * 3);
                    if (randomEffect === 0) {
                        // Score +1
                        score++;
                    } else if (randomEffect === 1) {
                        // Score +2
                        score += 2;
                    } else {
                        // Game over
                        gameOver();
                        return;
                    }
                    snakee.ateApple = true;
                    var tail = snakee.body[snakee.body.length - 1];
                    // Trouver la position de la queue du serpent
                    snakee.body.push([tail[0], tail[1]]);
                    // Ajouter un bloc à la queue du serpent
                    resetApplesPosition();
                }
            }

            if (snakee.isEatingDangerousApple(dangerousApple)) {
                score += 2; // Ajouter 2 points au score si le serpent mange la pomme bleue
                dangerousApple.setNewPosition(); // Réinitialiser la position de la pomme bleue
                snakee.ateApple = true; // Indiquer que le serpent a mangé la pomme
                var tail = snakee.body[snakee.body.length - 1];
                // Trouver la position de la queue du serpent
                snakee.body.push([tail[0], tail[1]]);
                // Ajouter deux blocs à la queue du serpent
                resetApplesPosition();
            }

            ctx.clearRect(0, 0, canvasWidth, canvasHeight);
            drawscore();
            snakee.draw();
            for (var i = 0; i < apples.length; i++) {
                apples[i].draw();
            }
            for (var i = 0; i < oranges.length; i++) {
                oranges[i].draw();
            }
            dangerousApple.draw();
            timeout = setTimeout(refreshCanvas, delay);
        }
    }
    var gameOverSoundPlayed = false; // Variable pour suivre si le son de game over a déjà été joué

    var gameOverSoundPlayed = false; // Variable pour suivre si le son de game over a déjà été joué

    var gameOverSound = new Audio('son.mp3'); // Charger le son de game over
    var gameOverSoundPlayed = false; // Variable pour suivre si le son de game over a déjà été joué
    var gameOverSoundPlayed = false; // Ajout d'une variable pour suivre si le son a été joué

function gameOver() {
    updateScoreIfHigher(score);
    clearTimeout(timeout);
    if (!gameOverSoundPlayed) { // Jouer le son seulement s'il n'a pas déjà été joué
        gameOverSound.play();
        gameOverSoundPlayed = true; // Marquer le son comme joué
    }
    
    drawEndGameInfo();
    drawGameOverText();
    
}
function updateScoreIfHigher(newScore) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "updateScore.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            console.log("Response from updateScore.php: " + xhr.responseText);
        }
    };
    xhr.send("score=" + newScore);
}



function drawEndGameInfo() {
    ctx.save();
    ctx.fillStyle = "rgba(0, 0, 0, 0.7)";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
    ctx.font = "bold 20px Arial";
    ctx.fillStyle = "white";
    ctx.textAlign = "center";
    ctx.fillText("Fin du Jeu", canvasWidth / 2, canvasHeight / 2 - 120);
    ctx.fillText("Nom d'utilisateur: " + document.getElementById("playerName").value, canvasWidth / 2, canvasHeight / 2 - 80);
    
    ctx.fillStyle = "green";
    ctx.font = "bold 24px Arial";
    ctx.fillText("Score: " + score, canvasWidth / 2, canvasHeight / 2);
    ctx.restore();
}

function drawGameOverText() {
    ctx.save();
    ctx.font = "bold 40px sans-serif";
    ctx.fillStyle = "red";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText("Game Over", canvasWidth / 2, canvasHeight / 2 + 60);
    ctx.fillText("Press space bar to restart", canvasWidth / 2, canvasHeight / 2 + 100);
    ctx.restore();
}

function restart() {
    gameOverSoundPlayed = false;
    snakee = new Snake([[6, 4], [5, 4], [4, 4]], "right");
    apples = [];
    oranges = [];
    apples.push(new Apple([11, 10], false));
    apples.push(new Apple([20, 10], true));
    oranges.push(new OrangeApple([15, 15]));
    dangerousApple = new DangerousApple([10, 11]);
    score = 0;
    refreshCanvas();

    // Jouer le son de game over lorsque le jeu est relancé
    gameOverSound.play();
}

    function drawscore() {
        ctx.save();
        ctx.font = "bold 40px sans-serif"; // Police en gras et taille ajustée
        ctx.fillStyle = "#008000"; // Couleur verte
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        var centreX = canvasWidth / 2;
        var centreY = 50; // Déplacer vers le haut de l'interface
        ctx.fillText("Score: " + score.toString(), centreX, centreY); // Modifiez le texte "score" en "Score"
        ctx.restore();
    }
    
    function drawBlock(ctx, position) {
        var x = position[0] * blocksize;
        var y = position[1] * blocksize;
        ctx.fillRect(x, y, blocksize, blocksize);
    }

    function Snake(body, direction) {
        this.body = body;
        this.direction = direction;
        this.ateApple = false;

        this.draw = function() {
            ctx.save();
            // Dessiner le corps du serpent
            ctx.fillStyle = snakeSkin; // Couleur rose
            for (var i = 1; i < this.body.length; i++) {
                drawBlock(ctx, this.body[i]);
            }
            
            // Dessiner la tête du serpent en forme de cœur
            var headX = this.body[0][0] * blocksize + blocksize / 2;
            var headY = this.body[0][1] * blocksize + blocksize / 2;
            var heartSize = blocksize / 2; // Taille du cœur
            ctx.fillStyle = snakeSkin; // Couleur rose
            ctx.beginPath();
            ctx.moveTo(headX, headY - heartSize); // Point supérieur du cœur
            ctx.bezierCurveTo(headX + heartSize, headY - heartSize, headX + heartSize * 2, headY, headX, headY + heartSize); // Courbe droite
            ctx.bezierCurveTo(headX - heartSize * 2, headY, headX - heartSize, headY - heartSize, headX, headY - heartSize); // Courbe gauche
            ctx.fill();
            
            // Dessiner la langue rouge (bouche ouverte)
            if (this.ateApple) {
                ctx.fillStyle = snakeSkin; // Couleur rouge
                ctx.beginPath();
                ctx.moveTo(headX - heartSize, headY + heartSize / 2); // Début de la langue
                ctx.quadraticCurveTo(headX, headY + heartSize * 2, headX + heartSize, headY + heartSize / 2); // Courbe de la langue
                ctx.fill();
            }
        
            // Dessiner les yeux noirs
            var eyeSize = blocksize / 10;
            var eyeOffsetX = blocksize / 5;
            var eyeOffsetY = blocksize / 5;
            ctx.fillStyle = "#000000"; // Couleur noire
            ctx.beginPath();
            ctx.arc(headX - eyeOffsetX, headY - eyeOffsetY, eyeSize, 0, Math.PI * 2, true);
            ctx.fill();
            ctx.beginPath();
            ctx.arc(headX + eyeOffsetX, headY - eyeOffsetY, eyeSize, 0, Math.PI * 2, true);
            ctx.fill();
        
            ctx.restore();
        };
        
        this.advance = function() {
            var nextPosition = this.body[0].slice();
            switch (this.direction) {
                case "left":
                    nextPosition[0] -= 1;
                    if (nextPosition[0] < 0) {
                        nextPosition[0] = widthInBlocks - 1;
                    }
                    break;
                case "right":
                    nextPosition[0] += 1;
                    if (nextPosition[0] >= widthInBlocks) {
                        nextPosition[0] = 0;
                    }
                    break;
                case "down":
                    nextPosition[1] += 1;
                    if (nextPosition[1] >= heightInBlocks) {
                        nextPosition[1] = 0;
                    }
                    break;
                case "up":
                    nextPosition[1] -= 1;
                    if (nextPosition[1] < 0) {
                        nextPosition[1] = heightInBlocks - 1;
                    }
                    break;
                default:
                    throw ("invalid direction");
            }
            this.body.unshift(nextPosition);
            if (!this.ateApple)
                this.body.pop();
            else
                this.ateApple = false;
        };

        this.setDirection = function(newDirection) {
            var allowedDirections;
            switch (this.direction) {
                case "left":
                case "right":
                    allowedDirections = ["up", "down"];
                    break;
                case "down":
                case "up":
                    allowedDirections = ["left", "right"];
                    break;
                default:
                    throw ("invalid direction");
            }
            if (allowedDirections.indexOf(newDirection) > -1) {
                this.direction = newDirection;
            }
        };

        this.checkCollision = function() {
            var wallCollision = false;
            var snakeCollision = false;
            var head = this.body[0];
            var rest = this.body.slice(1);
            var snakeX = head[0];
            var snakeY = head[1];
            var minX = 0;
            var minY = 0;
            var maxX = widthInBlocks - 1;
            var maxY = heightInBlocks - 1;
            var isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
            var isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;

            if (isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls) {
                wallCollision = true;
            }

            for (var i = 0; i < rest.length; i++) {
                if (snakeX === rest[i][0] && snakeY === rest[i][1]) {
                    snakeCollision = true;
                }
            }

            return wallCollision || snakeCollision;
        };

        this.isEatingApple = function(appleToEat) {
            var head = this.body[0];
            if (head[0] === appleToEat.position[0] && head[1] ===
                appleToEat.position[1]) {
                this.ateApple = true;
                return true;
            } else {
                return false;
            }
        };

        this.isEatingOrangeApple = function(orangeAppleToEat) {
            var head = this.body[0];
            if (head[0] === orangeAppleToEat.position[0] && head[1] === orangeAppleToEat.position[1]) {
                return true;
            } else {
                return false;
            }
        };

        this.isEatingDangerousApple = function(dangerousAppleToEat) {
            var head = this.body[0];
            if (head[0] === dangerousAppleToEat.position[0] && head[1]
                === dangerousAppleToEat.position[1]) {
                return true;
            } else {
                return false;
            }
        };
    }

    function resetApplesPosition() {
        for (var i = 0; i < apples.length; i++) {
            apples[i].setNewPosition();
        }
        for (var i = 0; i < oranges.length; i++) {
            oranges[i].setNewPosition();
        }
        dangerousApple.setNewPosition();
    }
    function Apple(position, isRed) {
        this.position = position;
        this.isRed = isRed;
    
        this.draw = function() {
            ctx.save();
            if (this.isRed) {
                ctx.fillStyle = "#ff0000";
            } else {
                ctx.fillStyle = "#008000"; // Couleur verte
            }
            ctx.beginPath();
            var radius = blocksize / 2;
            var x = this.position[0] * blocksize + radius;
            var y = this.position[1] * blocksize + radius;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
    
            // Ajouter le texte à l'intérieur de la pomme
            ctx.fillStyle = "#fff"; // Couleur blanche pour le texte
            ctx.font = "bold " + (blocksize * 0.7) + "px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText(this.isRed ? "!" : (this.isOrange ? "?" : "×1"), x, y); // Afficher "×1" pour la pomme verte et rien pour la pomme rouge
    
            ctx.restore();
        };
    
        
    
    
    
        this.setNewPosition = function() {
            var newX = Math.round(Math.random() * (widthInBlocks - 1));
            var newY = Math.round(Math.random() * (heightInBlocks - 1));
            this.position = [newX, newY];
        };

        this.isOnSnake = function(snakeToCheck) {
            for (var i = 0; i < snakeToCheck.body.length; i++) {
                if (this.position[0] === snakeToCheck.body[i][0] &&
                    this.position[1] === snakeToCheck.body[i][1]) {
                    return true;
                }
            }
            return false;
        };
    }

    function OrangeApple(position) {
        this.position = position;
    
        this.draw = function() {
            ctx.save();
            ctx.fillStyle = "#ffa500"; // Couleur orange
            var radius = blocksize / 2;
    
            // Dessiner la pomme
            ctx.beginPath();
            var x = this.position[0] * blocksize + radius;
            var y = this.position[1] * blocksize + radius;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
    
            // Dessiner le point d'interrogation
            ctx.fillStyle = "#fff"; // Couleur blanche pour le texte
            ctx.font = "bold " + (blocksize * 0.8) + "px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("?", x, y);
            
            ctx.restore();
        };
    
        this.setNewPosition = function() {
            var newX = Math.round(Math.random() * (widthInBlocks - 1));
            var newY = Math.round(Math.random() * (heightInBlocks - 1));
            this.position = [newX, newY];
        };
    
        this.isOnSnake = function(snakeToCheck) {
            for (var i = 0; i < snakeToCheck.body.length; i++) {
                if (this.position[0] === snakeToCheck.body[i][0] &&
                    this.position[1] === snakeToCheck.body[i][1]) {
                    return true;
                }
            }
            return false;
        };
    }
    

    function DangerousApple(position) {
        this.position = position;
    
        this.draw = function() {
            ctx.save();
            ctx.fillStyle = "#0000ff"; // Couleur bleue
            var radius = blocksize / 2; // Modifier le rayon pour la taille de la pomme verte
    
            ctx.beginPath();
    
            var x = this.position[0] * blocksize + radius;
            var y = this.position[1] * blocksize + radius;
            ctx.arc(x, y, radius, 0, Math.PI * 2, true);
            ctx.fill();
    
            // Ajouter le texte à l'intérieur de la pomme
            ctx.fillStyle = "#fff"; // Couleur blanche pour le texte
            ctx.font = "bold " + (blocksize * 0.8) + "px sans-serif";
            ctx.textAlign = "center";
            ctx.textBaseline = "middle";
            ctx.fillText("×2", x, y); // Afficher "×2" pour la pomme bleue
    
            ctx.restore();
        };
    
    
    
        this.setNewPosition = function() {
            var newX = Math.round(Math.random() * (widthInBlocks - 1));
            var newY = Math.round(Math.random() * (heightInBlocks - 1));
            this.position = [newX, newY];
        };
    
        this.isOnSnake = function(snakeToCheck) {
            for (var i = 0; i < snakeToCheck.body.length; i++) {
                if (this.position[0] === snakeToCheck.body[i][0] &&
                    this.position[1] === snakeToCheck.body[i][1]) {
                    return true;
                }
            }
            return false;
        };
    }
    
    document.addEventListener("keydown", function handleKeyDown(e) {
        if (!gameStarted) return; // Ne pas capturer les touches si le jeu n'a pas démarré
        e.preventDefault();
        var key = e.keyCode;
        var newDirection;
        switch (key) {
            case 37: // left arrow key
                newDirection = "left";
                break;
            case 38: // up arrow key
                newDirection = "up";
                break;
            case 39: // right arrow key
                newDirection = "right";
                break;
            case 40: // down arrow key
                newDirection = "down";
                break;
            case 32: // spacebar key
                restart();
                return;
            default:
                return;
        }
        snakee.setDirection(newDirection);
    });
};
