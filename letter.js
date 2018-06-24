function letter(currletter) {
    this.underlyingChar = currletter; //string value to store underlying char for letter
    this.guessed = false; //boolean value that stores whether letter has been guessed
    this.toString = function () { //function that returns underlying char if letter has been guessed
        if (this.guessed) {
            return this.underlyingChar;
        } else {
            return "__";
        }
    }
    this.checkGuess = function (guess) {
        if (guess === this.underlyingChar) {
            console.log("yes");
            this.guessed = true;
            this.toString();
        }
    }
};
//  var letter1 = new letter ('P');
// letter1.checkGuess();

module.exports = {
    "letterKey": letter
}