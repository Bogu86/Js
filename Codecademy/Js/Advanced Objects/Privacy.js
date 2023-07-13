// Javascrip does not have privacy options built in for objects. We use certain notation instead.
//Example shows type mixup in what is brought to the console - Recharged! Energy is currently at high30%. - type coercion

const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };

  robot._energyLevel = 'high';
  robot.recharge();
    