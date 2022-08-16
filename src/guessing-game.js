class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.min=min;
        this.max=max;
    }

    guess() {
        this.guessNumb=Math.round((this.max+this.min)/2);
        return this.guessNumb;
    }

    lower() {
       this.max=this.guessNumb;
       return  this.max;
    }

    greater() {
        this.min=this.guessNumb;
        return  this.min;
    }
}

module.exports = GuessingGame;
