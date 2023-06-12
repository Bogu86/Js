// avoid using arrow functions and this. notation
const robot = {
    energyLevel: 100,
    //we changed the function notation from arrow to normal
    checkEnergy()  {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();