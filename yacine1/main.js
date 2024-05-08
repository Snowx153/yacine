
themesBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 1000px;
        height: 750px;
        margin-top: 40px;
        border-radius: 0;
    `;
    saveTheme(theme);
    menu.hidden = true;
    setTimeout(() => themesWindow.hidden = false, 500);
    
}

let theme = 'white';
setGreenThemeBtn.onclick = function() {
    theme = 'green';
    setGreenThemeBtn.setAttribute('activated', 'true');
    setBlueThemeBtn.setAttribute('activated', 'false');
    setWhiteThemeBtn.setAttribute('activated', 'false');
    setBlackThemeBtn.setAttribute('activated', 'false');

    mainTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0a7c00;
    `
    winningTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0a7c00;
    `
    document.body.style.cssText = `
        background-color: #002e1f;
    `
    losingTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #000;
    `
    mainWindow.style.backgroundColor = 'rgba(16, 138, 0, 0.25)';
    mainWindow.style.border = '3px solid green';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid green';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid green';
    }

    menuTitle.style.color = '#fff';
    startBtn.style.border = '0';
    themesBtn.style.border = '0';
    skinsBtn.style.border = '0';
    testBtn.style.border = '0';
    menuInPauseBtn.style.border = '0';
    restartBtn.style.border = '0';
    backFromLosingWindowBtn.style.border = '0';
    winningBtn.style.border = '0';
    backFromThemesBtn.style.border = '0';
    setGreenThemeBtn.style.border = '3px solid #fff';
    setBlueThemeBtn.style.border = '3px solid #fff';
    setWhiteThemeBtn.style.border = '3px solid #fff';
    setBlackThemeBtn.style.border = '3px solid #fff';
    backFromSkinsBtn.style.border = '0';
    
    setGreenSnakeBtn.style.border = '3px solid #fff';
    setYellowSnakeBtn.style.border = '3px solid #fff';
    setRubikSnakeBtn.style.border = '3px solid #fff';
    setFierySnakeBtn.style.border = '3px solid #fff';
    setWhitenSnakeBtn.style.border = '3px solid #fff';
    setBlackSnakeBtn.style.border = '3px solid #fff';
    setSnakeHeadBtn.style.border = '3px solid #fff';
    setGruHeadBtn.style.border = '3px solid #fff';
    setSteveHeadBtn.style.border = '3px solid #fff';
    setJunkHeadBtn.style.border = '3px solid #fff';
    setAppleFoodBtn.style.border = '3px solid #fff';
    setPenisFoodBtn.style.border = '3px solid #fff';
    setMinionFoodBtn.style.border = '3px solid #fff';
    setBurgerFoodBtn.style.border = '3px solid #fff';
    setCreeperFoodBtn.style.border = '3px solid #fff';
    setMarijuanaFoodBtn.style.border = '3px solid #fff';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = '';
    }

    let unactivatedButtons = document.querySelectorAll('[activated="false"]');
    for (let btn of unactivatedButtons) {
        btn.style.backgroundImage = '';
    }
}

setBlueThemeBtn.onclick = function() {
    theme = 'blue';
    setGreenThemeBtn.setAttribute('activated', 'false');
    setBlueThemeBtn.setAttribute('activated', 'true');
    setWhiteThemeBtn.setAttribute('activated', 'false');
    setBlackThemeBtn.setAttribute('activated', 'false');

    mainTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0004ff;
    `
    winningTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #0004ff;
    `
    document.body.style.cssText = `
        background-color: #00012e;
    `
    losingTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    mainWindow.style.backgroundColor = 'rgba(12, 0, 180, 0.25)';
    mainWindow.style.border = '3px solid blue';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid blue';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid blue';
    }

    menuTitle.style.color = '#fff';
    startBtn.style.border = '0';
    themesBtn.style.border = '0';
    skinsBtn.style.border = '0';
    testBtn.style.border = '0';
    menuInPauseBtn.style.border = '0';
    restartBtn.style.border = '0';
    backFromLosingWindowBtn.style.border = '0';
    winningBtn.style.border = '0';
    backFromThemesBtn.style.border = '0';
    setGreenThemeBtn.style.border = '3px solid #fff';
    setBlueThemeBtn.style.border = '3px solid #fff';
    setWhiteThemeBtn.style.border = '3px solid #fff';
    setBlackThemeBtn.style.border = '3px solid #fff';
    backFromSkinsBtn.style.border = '0';

    setGreenSnakeBtn.style.border = '3px solid #fff';
    setYellowSnakeBtn.style.border = '3px solid #fff';
    setRubikSnakeBtn.style.border = '3px solid #fff';
    setFierySnakeBtn.style.border = '3px solid #fff';
    setWhitenSnakeBtn.style.border = '3px solid #fff';
    setBlackSnakeBtn.style.border = '3px solid #fff';
    setSnakeHeadBtn.style.border = '3px solid #fff';
    setGruHeadBtn.style.border = '3px solid #fff';
    setSteveHeadBtn.style.border = '3px solid #fff';
    setJunkHeadBtn.style.border = '3px solid #fff';
    setAppleFoodBtn.style.border = '3px solid #fff';
    setPenisFoodBtn.style.border = '3px solid #fff';
    setMinionFoodBtn.style.border = '3px solid #fff';
    setBurgerFoodBtn.style.border = '3px solid #fff';
    setCreeperFoodBtn.style.border = '3px solid #fff';
    setMarijuanaFoodBtn.style.border = '3px solid #fff';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = '';
    }

    let unactivatedButtons = document.querySelectorAll('[activated="false"]');
    for (let btn of unactivatedButtons) {
        btn.style.backgroundImage = '';
    }
}

setBlackThemeBtn.onclick = function() {
    theme = 'black';
    setGreenThemeBtn.setAttribute('activated', 'false');
    setBlueThemeBtn.setAttribute('activated', 'false');
    setWhiteThemeBtn.setAttribute('activated', 'false');
    setBlackThemeBtn.setAttribute('activated', 'true');

    mainTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    document.body.style.cssText = `
        background-color: #000;
    `
    losingTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    winningTitle.style.cssText = `
        color: #fff;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    mainWindow.style.backgroundColor = '#000';
    mainWindow.style.border = '3px solid #fff';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid #fff';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid #fff';
    }

    menuTitle.style.color = '#fff';
    startBtn.style.border = '0';
    themesBtn.style.border = '0';
    skinsBtn.style.border = '0';
    testBtn.style.border = '0';
    menuInPauseBtn.style.border = '0';
    restartBtn.style.border = '0';
    backFromLosingWindowBtn.style.border = '0';
    winningBtn.style.border = '0';
    backFromThemesBtn.style.border = '0';
    setGreenThemeBtn.style.border = '3px solid #fff';
    setBlueThemeBtn.style.border = '3px solid #fff';
    setWhiteThemeBtn.style.border = '3px solid #fff';
    setBlackThemeBtn.style.border = '3px solid #fff';
    backFromSkinsBtn.style.border = '0';

    setGreenSnakeBtn.style.border = '3px solid #fff';
    setYellowSnakeBtn.style.border = '3px solid #fff';
    setRubikSnakeBtn.style.border = '3px solid #fff';
    setFierySnakeBtn.style.border = '3px solid #fff';
    setWhitenSnakeBtn.style.border = '3px solid #fff';
    setBlackSnakeBtn.style.border = '3px solid #fff';
    setSnakeHeadBtn.style.border = '3px solid #fff';
    setGruHeadBtn.style.border = '3px solid #fff';
    setSteveHeadBtn.style.border = '3px solid #fff';
    setJunkHeadBtn.style.border = '3px solid #fff';
    setAppleFoodBtn.style.border = '3px solid #fff';
    setPenisFoodBtn.style.border = '3px solid #fff';
    setMinionFoodBtn.style.border = '3px solid #fff';
    setBurgerFoodBtn.style.border = '3px solid #fff';
    setCreeperFoodBtn.style.border = '3px solid #fff';
    setMarijuanaFoodBtn.style.border = '3px solid #fff';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = '';
    }

    let unactivatedButtons = document.querySelectorAll('[activated="false"]');
    for (let btn of unactivatedButtons) {
        btn.style.backgroundImage = '';
    }
}

setWhiteThemeBtn.onclick = function() {
    theme = 'white';
    setGreenThemeBtn.setAttribute('activated', 'false');
    setBlueThemeBtn.setAttribute('activated', 'false');
    setWhiteThemeBtn.setAttribute('activated', 'true');
    setBlackThemeBtn.setAttribute('activated', 'false');

    mainTitle.style.cssText = `
        color: #000;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    document.body.style.cssText = `
        background-color: #fff;
    `
    losingTitle.style.cssText = `
        color: #000;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    winningTitle.style.cssText = `
        color: #000;
        text-shadow: 6px 6px 0 #a3a3a3;
    `
    mainWindow.style.backgroundColor = '#fff';
    mainWindow.style.border = '3px solid #000';

    const themesImgs = themesWindow.querySelectorAll('img');
    const skinsImgs = skinsWindow.querySelectorAll('img');
    for (let img of themesImgs) {
        img.style.border = '3px solid #000';
    }
    for (let img of skinsImgs) {
        img.style.border = '3px solid #000';
    }

    menuTitle.style.color = '#000';
    startBtn.style.border = '1px solid #000';
    themesBtn.style.border = '1px solid #000';
    skinsBtn.style.border = '1px solid #000';
    testBtn.style.border = '1px solid #000';
    menuInPauseBtn.style.border = '1px solid #000';
    restartBtn.style.border = '1px solid #000';
    backFromLosingWindowBtn.style.border = '1px solid #000';
    winningBtn.style.border = '1px solid #000';
    backFromThemesBtn.style.border = '1px solid #000';
    setGreenThemeBtn.style.border = '3px solid #000';
    setBlueThemeBtn.style.border = '3px solid #000';
    setWhiteThemeBtn.style.border = '3px solid #000';
    setBlackThemeBtn.style.border = '3px solid #000';
    setWhiteThemeBtn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
    backFromSkinsBtn.style.border = '1px solid #000';

    setGreenSnakeBtn.style.border = '3px solid #000';
    setYellowSnakeBtn.style.border = '3px solid #000';
    setRubikSnakeBtn.style.border = '3px solid #000';
    setFierySnakeBtn.style.border = '3px solid #000';
    setWhitenSnakeBtn.style.border = '3px solid #000';
    setBlackSnakeBtn.style.border = '3px solid #000';
    setSnakeHeadBtn.style.border = '3px solid #000';
    setGruHeadBtn.style.border = '3px solid #000';
    setSteveHeadBtn.style.border = '3px solid #000';
    setJunkHeadBtn.style.border = '3px solid #000';
    setAppleFoodBtn.style.border = '3px solid #000';
    setPenisFoodBtn.style.border = '3px solid #000';
    setMinionFoodBtn.style.border = '3px solid #000';
    setBurgerFoodBtn.style.border = '3px solid #000';
    setCreeperFoodBtn.style.border = '3px solid #000';
    setMarijuanaFoodBtn.style.border = '3px solid #000';

    let activatedButtons = document.querySelectorAll('[activated="true"]');
    for (let btn of activatedButtons) {
        btn.style.backgroundImage = 'url(./assets/themes/black-circle.png)';
    }
}

backFromThemesBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `;
    saveTheme(theme);
    themesWindow.hidden = true;
    menu.hidden = false;
}

testBtn.onclick = function() {
    alert(`Ваш IQ — ${rand(0, 228)}`);
}

startBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 1000px;
        height: 750px;
        margin-top: 40px;
        border-radius: 0;
    `;
    saveTheme(theme);
    menu.hidden = true;
    game.style.cssText = `width: 100%; height: 100%`;
    setTimeout(startGame, 500);
}

let losingIntervalId;
restartBtn.onclick = function() {
    clearInterval(losingIntervalId);
    losingTitle.style.color = '#fff';
    losingWindow.hidden = true;
    game.style.cssText = `width: 100%; height: 100%`;
    startGame();
}

winningBtn.onclick = function() {
    winningWindow.hidden = true;
    game.style.cssText = `width: 100%; height: 100%`;
    winningWindow.style.opacity = '0';
    startGame();
}

backFromLosingWindowBtn.onclick = function() {
    mainWindow.style.cssText = `
        width: 500px;
        height: 400px;
        margin-top: 200px;
        border-radius: 20px;
    `; 
    saveTheme(theme);
    clearInterval(losingIntervalId);
    losingTitle.style.color = '#fff';
    losingWindow.hidden = true;
    menu.hidden = false;
}





// Themes
function saveTheme(theme) {
    switch(theme) {
        case 'green':
            mainWindow.style.backgroundColor = 'rgba(16, 138, 0, 0.25)';
            mainWindow.style.border = '3px solid green';
            break;
        case 'blue':
            mainWindow.style.backgroundColor = 'rgba(12, 0, 180, 0.25)';
            mainWindow.style.border = '3px solid blue';
            break;
        case 'white':
            mainWindow.style.backgroundColor = '#fff';
            mainWindow.style.border = '3px solid #000';
            break;
        case 'black':
            mainWindow.style.backgroundColor = '#000';
            mainWindow.style.border = '3px solid #fff';
            break;
    }
}
