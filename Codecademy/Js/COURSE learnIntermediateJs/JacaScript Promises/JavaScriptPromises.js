const inventory = {
    sunglasses: 10,
    pants: 1088,
    bags: 1344
  };
  
  // Write your code below:
  function myExecutor(resolve, reject) {
    if(inventory.sunglasses > 0) {
      resolve('Sunglasses order processed.');
    } else {
      reject('That item is sold out.');
    }
  }
  
  function orderSunglasses () {
    return new Promise(myExecutor);
  }
  const orderPromise = orderSunglasses();
  
  console.log(orderPromise);