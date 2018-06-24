function letter(currletter) {
    this.underlyingChar=currletter;//string value to store underlying char for letter
    this.guessed=false;//boolean value that stores whether letter has been guessed
    this.returnChar=function(){//function that returns underlying char if letter has been guessed
        if(this.guessed){
            console.log(this.underlyingChar);
        }
        else{
            console.log("__");
        }
    }
    this.checkGuess=function(guess){
        if(this.underlyingChar===guess){
            this.guessed=true;
        }
    }
};

// var letter1 = new letter ('P');
// console.log(letter1.returnChar());

module.exports={
    "letterKey":letter
}

