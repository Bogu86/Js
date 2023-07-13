//PROPERTY VALUE SHORTHAND ES6 new way of assiging properties to variables - known as destructuring.
const robotFactory = (model, mobile) => {
    return {
      model,        // previous model : model,
      mobile,        // same here
      beep() {
        console.log('Beep Boop');
      }
    }
  }
  
  // To check that the property value shorthand technique worked:
  const newRobot = robotFactory('P-501', false)
  console.log(newRobot.model)
  console.log(newRobot.mobile)