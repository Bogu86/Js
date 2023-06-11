// avoid using arrow functions and this. notation
const robot = {
    energyLevel: 100,
    checkEnergy()  {
      console.log(`Energy is currently at ${this.energyLevel}%.`)
    }
  }
  
  robot.checkEnergy();