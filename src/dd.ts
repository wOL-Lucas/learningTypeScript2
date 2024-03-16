

class character{
  public constructor(public strength:number, public dexterity:number, public constitution: number, public intelligence: number, public wisdom: number, public charisma: number){
    this.strength = strength;
    this.dexterity = dexterity;
    this.constitution = constitution;
    this.intelligence = intelligence;
    this.wisdom = wisdom;
    this.charisma = charisma;
  }
}



const throwDice = ():number => {
  return Math.floor(Math.random() * 6) + 1;
}


const generateCharacter = ():character => {
  let stats: number[] = [];

  for(let i = 0; i < 6; i++){
    let dice = [throwDice(), throwDice(), throwDice(), throwDice()];
    
    dice.sort((a, b) => b - a);
    dice.pop();
        
    let sum = dice.reduce((a, b) => a + b, 0);
    stats.push(sum);  
  }

  return new character(stats[0], stats[1], stats[2], stats[3], stats[4], stats[5]);
}

const character1 = generateCharacter();
console.log(character1)



