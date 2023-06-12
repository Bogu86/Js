// Javascrip does not have privacy options built in for objects. We use certain notation instead.

const robot = {
    _energyLevel: 100,
    recharge(){
      this._energyLevel += 30;
      console.log(`Recharged! Energy is currently at ${this._energyLevel}%.`)
    }
  };

  obot._energyLevel = 'high';
  robot.recharge();
    