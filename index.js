var inquirer = require('inquirer');
var word = require("./word.js");


var words = {
    City: ["toronto", "california", "london", "montreal"],
    Sports: ["soccer", "curling", "jordan", "stadium", "rink"],
    PopCulture: ["katy", "movie", "jackson", "instagram", "hollywood", "facebook"],
    Animals: ["dog", "hippo", "rhino", "panda", "Lion", "racoon"]
}

var pickcategory = function () {
    var keywords = Object.keys(words);
    var combine = "";
    var selection;
    //console.log(keywords);
    var getrandomcategory = keywords[Math.floor(Math.random() * keywords.length)];
    // hint(getrandomcategory);
    var wordsforCategory = words[getrandomcategory];
    temprandomword = wordsforCategory[Math.floor(Math.random() * wordsforCategory.length)]
    var temphangmanarr = temprandomword.toLowerCase().split("")
    return temphangmanarr;
}
var wordToUse = pickcategory().join("");
// console.log(x);

var word1;


var startGame = function () {
    guessLeft=0;
    inquirer.prompt([{
        type: "confirm",
        name: "startGame",
        message: "\n \n**************************\nWelcome to the Node Word guess game." + "\n" + "You have 10 guesses to guess a word right! Do you want to continue?\n**************************\n"
    }]).then(function (answer) {
        if (answer.startGame) {
            console.log("Let's begin!");
            console.log(wordToUse);
            word1 = new word.wordKey(wordToUse);
            word1.returnChar();
            word1.toString();
            letterObj=word1.letterArr;
            inquire();
        } else {
            console.log("\nSad to see you go! Next time then!\n");
        }
    });
};
startGame();

var guessLeft = 0;
var letterObj;
var allGuessed=[];

/*---------------------picking a letter after game starts------------------------ */
var checkinput = function (answer) {
    console.log("\nyou picked " + answer.letter);
    console.log("You have "+(10-guessLeft)+" guesses remaining\n")
    word1.guessString(answer.letter);
    word1.toString();
    inquire();
}
function inquire() {
    console.log(letterObj.length);
    allGuessed=[];
    for(ele in letterObj){
        if(letterObj[ele].guessed){
        allGuessed.push(true);
        }
    }

    if(allGuessed.length==letterObj.length && guessLeft<=10){
        console.log("\n***********--YES! YOU WON!--***********\n");
        restartGame();
        return;
    }

    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: "Pick a letter"
    }]).then(function (answer) {
        guessLeft++;
        if (guessLeft == 10) {
            console.log("Game Over!");
            restartGame();
            return;
        }
        checkinput(answer);
    });
}


/*-----------------------------------restart game function----------------------------------*/
function restartGame() {
    inquirer.prompt([{
        type: "confirm",
        name: "restartGame",
        message: "\n\n**************************\nPlay Again?\n**************************\n\n"
    }]).then(function (answer) {
        if (answer.restartGame) {
            startGame();
        } else {
            console.log("\nSad to see you go! Next time then!\n");
        }
    });
}