var letter = require("./letter.js");
// var letter1=new letter.letterKey("P");
// console.log(letter1.underlyingChar);


function word(currentWord){
    this.wordArr=currentWord.split("");//an array of new letter objects repping the current word
    this.returnString=function(){
        var x=this.wordArr[0];
        for(var i=0;i<this.wordArr.length;i++){
            var temp=new letter.letterKey(this.wordArr[i]).returnChar();
        }
    }
    this.guessString=function(guess){
        letter.letterKey(guess);
    }
};

// var word1= new word("Percy");
// word1.returnString();

module.exports={
    "wordKey":word
}