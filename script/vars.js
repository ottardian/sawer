var charName = "Miwka";

var stepcounter = 6;
var battleStance = 0;

// ------------------Lvl-----------------------------------------------------------

var currLvl = 1;
var currExp = 0;
var maxExp = (currLvl * 10) * 1.5;


// -------------------HP------------------------------------------------------------

var maxHp = 100 + (currLvl * 20);
var currHp = maxHp;
var currHpRefill = 0;

var battleLuck = 1;

var currEnemy = 0;
var currEnemyName = "враг";
var currEnemyHp = 0;
var currEnemyDmg = 0;
var rewardExp = 0;

// -------------------Equipment-----------------------------------------------------

var currHelmet = {
    type: "helmet",
    name: "Bandana",
    iLevel: 1,
    iDef: 1,
    iDmg: 0
};

var currArmor = {
    type: "armor",
    name: "Shirt",
    iLevel: 1,
    iDef: 1,
    iDmg: 0
};

var currBoots = {
    type: "boots",
    name: "Sandals",
    iLevel: 1,
    iDef: 1,
    iDmg: 0
};

var currRWeapon = {
    type: "rweapon",
    name: "Stick",
    iLevel: 1,
    iDef: 0,
    iDmg: 3
};

var currLWeapon = {
    type: "lweapon",
    name: "Sock",
    iLevel: 1,
    iDef: 0,
    iDmg: 3
};


// ------------------Damage----------------------------------------------------------

var minDmg = 1;
var equipDmg = currHelmet.iDmg +
    currArmor.iDmg +
    currBoots.iDmg +
    currRWeapon.iDmg +
    currLWeapon.iDmg;
var modDmg = 0;
var currDmg = minDmg + equipDmg + modDmg;


// ------------------Defence---------------------------------------------------------

var minDef = 1;
var equipDef = currHelmet.iDef +
    currArmor.iDef +
    currBoots.iDef +
    currRWeapon.iDef +
    currLWeapon.iDef;
var modDef = 0;
var currDef = minDef + equipDef + modDef;


// ------------------Display---------------------------------------------------------

var displayCurrLocation = document.getElementById("currLocation");
var displayCurrLvl = document.getElementById("currLvl");
var displayCurrExp = document.getElementById("currExp");
var displayMaxExp = document.getElementById("maxExp");
var displayCurrHp = document.getElementById("currHp");
var displayMaxHp = document.getElementById("maxHp");
var displayEnemyName = document.getElementById("currEnemyName");
var displayEnemyHp = document.getElementById("currEnemyHp");
var displayBattleStats = document.getElementById("battleStats");

var displaytest1 = document.getElementById("test1");
var displaytest2 = document.getElementById("test2");

var displayTextFrame = document.getElementById("mainFrameIn");

var storyButton = document.getElementById("storyButton");
var projectButton = document.getElementById("projectButton");
var developerButton = document.getElementById("developerButton");
var goShit = document.getElementById("workButton");
var hiddenDiv = document.getElementById("hiddenText");


// ------------------Functions-------------------------------------------------------

// Функция (randNum) Randomizer
var randNum = function (maxNum) {
    var rand = Math.floor(Math.random() * maxNum);
    return (rand);
};

// Функция (phraseSelector) выбора номера уникальной фразы из списка
// Перед исп locPhrase обнулить
var locPhrase = new Array(0);
var sarcPhrase = new Array(0);

var phraseSelector = function (loc, arr) {
    if (arr.length == 0) {
        for (var i = 0; i < loc; i++) {
            arr[i] = i;
        }
        if (arr == locPhrase) {
            arr.splice(0, 2); // если не сарказм то начало отсчёта фраз от 2, первые 2 ячейки вступлени и монстры
        }
    }
    var phrasePosition = randNum(arr.length);
    var num = arr[phrasePosition];
    arr.splice(phrasePosition, 1);
    return num;
};

// Функция (appendText) добавляет рандомный текст из нужного региона location
// исключая возможность повторения одинаковых текстов
var appendText = function (location, arraySelector) {
    var textNumber = phraseSelector(location.length, arraySelector);
    var newTextField = document.createElement("div");
    newTextField.className = "mainFrameTextField";
    newTextField.innerHTML = location[textNumber].phrase;
    displayTextFrame.appendChild(newTextField);
    displayTextFrame.scrollTop = 99999;
};

// Добавляет рандомный текст из нужного региона
var appendOnce = function (location) {
    var newTextField = document.createElement("div");
    newTextField.className = "mainFrameTextField";
    newTextField.innerHTML = location[randNum(location.length)].phrase;
    displayTextFrame.appendChild(newTextField);
    displayTextFrame.scrollTop = 99999;
};

// Добавляет див для боя
var appendBattleText = function () {
    var newTextField = document.createElement("div");
    newTextField.className = "mainFrameBattleField";
    var editText = battleEntering[randNum(battleEntering.length)].phrase;
    newTextField.innerHTML = editText.replace ("currEnemyName", currEnemyName);
    displayTextFrame.appendChild(newTextField);
    displayTextFrame.scrollTop = 99999;
};

// Добавляет разделяющую надпись названия текущего региона
var locationSeparator = function () {
    var newTextField = document.createElement("div");
    newTextField.className = "mainFrameTextSeparator";
    var locName = switchLocation();
    newTextField.innerHTML = locName;
    displayTextFrame.appendChild(newTextField);
    displayTextFrame.scrollTop = 99999;
};

// Добавляет дополнительный параграф в последний див с инфо об уроне
var addBattleDmg = function (ind,outd) {
    var divList = document.querySelectorAll ("#mainFrameIn div");
    var divPosition = divList.length-1;
    var lastDiv = divList[divPosition];
    var newParagraph = document.createElement("p");
    newParagraph.innerHTML = " <hr /> " + currEnemyName + " " + battleMoodPhrases[randNum(battleMoodPhrases.length)].phrase + " " + enemyHitPhrases[randNum(enemyHitPhrases.length)].phrase + " тебя на " + ind + " прочности, а ты в ответ " + battleMoodPhrases[randNum(battleMoodPhrases.length)].phrase + " " + myHitPhrases[randNum(myHitPhrases.length)].phrase + " на " + outd + ".";
    lastDiv.appendChild(newParagraph);
    displayTextFrame.scrollTop = 99999;
};

// ---------------------------- Функция очистки экрана сообщений при переполнении более чем на 20

var clearOverstack = function () {
    var divList = document.querySelectorAll ("#mainFrameIn div");
    if (divList.length>20){
        displayTextFrame.removeChild (divList[0]);
    };        
};

// ---------------------------- Функция прятанья дива с инфой на весь экран

hiddenDiv.onclick = function () {
    hiddenDiv.style.visibility = "hidden";
};

// ---------------------------- Функция нажатия кнопок в хедере

storyButton.onclick = function () {
    hiddenDiv.style.visibility = "visible";
    hiddenDiv.innerHTML = textForButtons.storyBtn;
};

projectButton.onclick = function () {
    hiddenDiv.style.visibility = "visible";
    hiddenDiv.innerHTML = textForButtons.projectBtn;
};

developerButton.onclick = function () {
    hiddenDiv.style.visibility = "visible";
    hiddenDiv.innerHTML = textForButtons.devBtn;
};

// ------------------- Функция переключателя боя, шанс боя 20% на каждую итерацию фраз

var battleCheck = function () {
    var battleNum = randNum(100);
    if (battleNum < 20) {
        battleStance = 1;
    };
};

// ---------------------------- Функция проверки удачи в бою (промах (20%) попадание крит (20%))

var luckCheck = function () {
    var luckNum = randNum(100);
    if (luckNum<=20){
        battleLuck = 0;
    } else if (luckNum>=80) {
        battleLuck = 2;
    } else {
        battleLuck = 1;
    };
};

var battleRnd = function () { // создаем разброс урона в зависимости от уровня
    var check = randNum (3);
    if (check==0){
        return currLvl*(-1);
    } else if (check==1){
        return 0;
    } else if (check==2){
        return currLvl;
    };
};

// ----------------------------- Функция получения опыта и лвлапа

var expGain = function (plusexp) {
    currExp = currExp + plusexp;
    if (currExp >= maxExp) {
        currLvl++;
        maxExp = (currLvl * 10) * 1.5;
        currExp = 0;
        maxHp = 100 + (currLvl * 20);
        currHp = maxHp;
        appendOnce (lvlupPhrases);
        displayCurrHp.innerHTML = currHp;
        displayMaxHp.innerHTML = " / " + maxHp;
        displayCurrLvl.innerHTML = currLvl;
        displayMaxExp.innerHTML = " / " + maxExp;
    };
    displayCurrExp.innerHTML = currExp;
};

//  ------------------------- функция смены Названия месности

var switchLocation = function () {
    var locName;
    switch (currentLocation) {
        case homePhrases:
            locName = "Дом";
            break;
        case r01w01:
            locName = "Мир мохнаток";
            break;
        case r01w02:
            locName = "Мир Ц-тронов";
            break;
        case r01w03:
            locName = "Мир Дохреножек";
            break;
        default:
            locName = "Потерялись блять!";
            break;
    };
    displayCurrLocation.innerHTML = locName;
    return locName;
};

// ------------          !!!! функция выбора и публикаци фразы !!!!!!!!

var saySomething = function () {

    //    Список миров ringXXworldXX
    var locationList = [r01w01, r01w02, r01w03];

    //                          выбор места действия

    if (currentLocation == homePhrases & stepcounter == 0) {    //   когда время дома истекло даем 10 ходов в один из миров
        currentLocation = locationList[randNum(locationList.length)];
        stepcounter = 10;
        locPhrase.length = 0;
        appendOnce(currentLocation[0]);
        switchLocation();
        locationSeparator();
        return;
    };

    if (currentLocation !== homePhrases & stepcounter == 0) {   //   если мы не дома, а шаги истекли возвращаемся домой на 6 ходов
        currentLocation = homePhrases;
        stepcounter = 6;
        locPhrase.length = 0;
        switchLocation();
        locationSeparator();
        appendOnce(currentLocation[0]);
        var stepsToDo = stepcounter;
        stepsToDo--;
        currHpRefill = Math.floor((maxHp - currHp) / stepsToDo) + 1;  // вычисляем сколько нужно регенить хп за ход дома
        return;
    };
    
    //             Дома лечимся
    if (currentLocation == homePhrases) {
        if (currHp < maxHp) {
            currHp = currHp + currHpRefill;
            if (currHp > maxHp) {
                currHp = maxHp;
            };
        };
        displayCurrHp.innerHTML = currHp;
    };


    //              Есть сарказм и наше месторасположение

    var selectedlocation = currentLocation;
    var phraseToShow = [sarcasmPhrases, selectedlocation];   //  аррей с фразами - сарказм или лока
    var phraseList = [sarcPhrase, locPhrase];                //  списки доступных фраз для показа отдоельно сарк и локи

    //           Выбираем будет говорить сарказм (вероятность 10%) или о месте

    var cnum = randNum(100);
    if (cnum < 10) {
        cnum = 0;
    } else {
        cnum = 1;
    };

    //                               ОСНОВНОЙ БЛОК

    appendText(phraseToShow[cnum], phraseList[cnum]); // добавили фразу из сарказма или локи из списка доступных

    if (currentLocation !== homePhrases) {
        battleCheck()
    };
    stepcounter -= 1; //  отнимаем один шаг

    //    Технохери на дисплее

    // displaytest1.innerHTML = currEnemyName;
    // displaytest2.innerHTML = currDef;

};  //                                    FIN



// ----------------------------        Функция боя

var battleFunction = function () {

    if (currEnemy == 0) {         // объявление противника
        currEnemy = currentLocation[1][randNum(currentLocation[1].length)];
        currEnemyName = currEnemy.mnstrName;
        currEnemyHp = currEnemy.mnstrHp;
        currEnemyDmg = currEnemy.mnstrDmg;
        rewardExp = currEnemy.mnstrExp;
        appendBattleText ();
        displayEnemyName.innerHTML = currEnemyName;
        displayEnemyHp.innerHTML = currEnemyHp;
        displayBattleStats.style.transform = "none";
        return;
    };

    if (currEnemyHp <= 0) {      // если противник умер
        battleStance = 0;
        currEnemy = 0;
        currEnemyHp = 0;
        currEnemyDmg = 0;
        currEnemyName = "Врагов не обнаружено";
        displayBattleStats.style.transform = "rotateY(90deg)";
        expGain(rewardExp);

    } else if (currHp <= 0) {    // если персонаж умер
        battleStance = 0;
        currEnemy = 0;
        currEnemyHp = 0;
        currEnemyDmg = 0;
        currEnemyName = "Врагов не обнаружено";
        displayBattleStats.style.transform = "rotateY(90deg)";
        stepcounter = 0;
        appendOnce (resurrectPhrases);

    } else {                      // нанесение урона
        var inDmg = currEnemyDmg;
        var outDmg = currDmg;
        
        luckCheck ();            // удар противника
        var dmgMod = battleRnd();
        inDmg = inDmg + dmgMod;
        if (inDmg<1){
            inDmg=1
        };
        inDmg = Math.floor(inDmg * battleLuck);
        currHp = currHp - inDmg;

        // displaytest1.innerHTML = dmgMod; //!! test
        
        
        luckCheck ();            // твой удар
        outDmg = outDmg + battleRnd();
        if (outDmg<1){
            outDmg=1
        };
        outDmg = Math.floor(outDmg * battleLuck);
        currEnemyHp = currEnemyHp - outDmg;

        // displaytest2.innerHTML = dmgMod; // !! test
       
        addBattleDmg(inDmg,outDmg);
        
        if (currEnemyHp<0){
            currEnemyHp = 0;
        };
        if (currHp<0){
            currHp = 0;
        };
        
        displayCurrHp.innerHTML = currHp;
        displayEnemyHp.innerHTML = currEnemyHp;
        
        
    };
    
};

// ----------------------------- ОСНОВНАЯ ФУНКЦИЯ

var mainFunction = function () {
    clearOverstack();
    if (battleStance) {
        battleFunction();
    } else {
        saySomething();
    };
};

