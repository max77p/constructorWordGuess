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
var wordToUse=pickcategory().join("");
// console.log(x);

var word1;
var startGame=function(){
    word1 = new word.wordKey(wordToUse);
    word1.returnChar();
    word1.toString();
};
startGame();


var checkinput = function (answer) {
    console.log("you picked " + answer.letter);
    word1.guessString(answer.letter);
    word1.toString();
    inquire();
}

inquire();
function inquire() {
    inquirer.prompt([{
        type: "input",
        name: "letter",
        message: "Pick a letter"
    }]).then(checkinput)
}

