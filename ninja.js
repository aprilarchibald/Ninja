class Ninja {
    constructor(name, health=100){
        this.name =name;
        this.health = health;
        this.speed = 3;
        this.strength = 3;
    }
    sayName(){
        console.log('Name: ' + this.name)
    }
    showStats(){
        console.log(`Name: ${this.name}`); 
        console.log(`Strength: ${this.strength}`); 
        console.log(`Speed: ${this.speed}`); 
        console.log(`Health:${this.health}`);
    }
    drinkSake(){
        this.health += 10
        console.log(`Drink Sake: Add 10 health points Updated Health: ${this.health}`)
    }
}

const ninja1 = new Ninja("Hyabusa");
ninja1.sayName();
ninja1.showStats();
ninja1.drinkSake();

class Sensei extends Ninja{
    constructor(name, wisdom){
        super(name);
        this.health = 200;
        this.speed =10;
        this.strength =10;
        this.wisdom = 10;
    }
    speakWisdom(){
        this.drinkSake();
        console.log('It is never wise to drive and sake')
    }
}

const superSensei = new Sensei("Master Splinter");
superSensei.speakWisdom();
superSensei.showStats();




