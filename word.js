var letter = require("./letter.js");
// var letter1=new letter.letterKey("P");
// console.log(letter1.underlyingChar);


function word(currentWord) {
    this.wordArr = currentWord.split(""); //an array of new letter objects repping the current word
    this.letterArr = [];
    this.returnChar = function () {
        for (var i = 0; i < this.wordArr.length; i++) {
           var temp=new letter.letterKey(this.wordArr[i]);
           this.letterArr.push(temp); 
        }
    }
    this.toString=function(){
        console.log(this.letterArr.join(' '));
    }
    this.guessString = function (guess) {
        for(var i=0;i<this.letterArr.length;i++){
            this.letterArr[i].checkGuess(guess);
        } 
    }
    
};

module.exports = {
    "wordKey": word
}