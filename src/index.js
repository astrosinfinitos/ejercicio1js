Math.floor(Math.random() * 6 ) + 1;

class Dice{
    constructor (nCaras){
        this.caras = nCaras;
    }
    rollDice (){
        return Math.floor(Math.random() * this.caras) +1;
    }
}

const dado1 = new Dice(6);
const dado2 = new Dice(12);

console.log(dado1.rollDice())
console.log(dado2.rollDice())
