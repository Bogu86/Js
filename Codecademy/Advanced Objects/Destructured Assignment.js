//DESTRUCTURED ASSINGnMENT saves us some keystrokes I guess.
const robot = {
    model: '1E78V2',
    energyLevel: 100,
    functionality: {
      beep() {
        console.log('Beep Boop');
      },
      fireLaser() {
        console.log('Pew Pew');
      },
    }
  };
  
  const { functionality } = robot; //Called objects properties, a bit faster 
  functionality.beep();