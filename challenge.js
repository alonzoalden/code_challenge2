var ob = {}

ob['1'] = 'a'
ob['a'] = 'a'
ob['2'] = 'a'
console.log(ob)
//Notice how the object will automatically order these??

function VendingMachine(coins) {
  this.coins = coins;
}

VendingMachine.prototype.vending = function(price, credit) {
  var totalCredit = 0;
  var totalBank = 0;

  for (var key in credit) {
    if (this.coins[key] === undefined) {
      console.log(this.coins[key])
      return credit;
    }
    totalCredit+= (Number(key) * credit[key]);
  }

  for (var key in this.coins) {
    totalBank+= (Number(key) * this.coins[key]);
  }

  if (totalCredit < price) {
    return credit;
  }
  if (totalCredit === price) {
    return {};
  }

  var changeRequired = totalCredit - price;

  var coinArray = Object.keys(this.coins);
  console.log(changeRequired)

  while (totalCredit > 0) {

    for (var i = coinArray.length; i > 0; i--) {
      var currentCoin = Number(coinArray[i]);
      if (currentCoin < changeRequired && this.coins[coinArray[i]] > 0) {
        //remove coin quantity from this.coins object
        this.coins[coinArray[i]] - 1;
        changeRequired -= currentCoin;

        //create new return object that matches what got just got subtracted.

      }

    }

  }


  //create function to determine total credit
  //compare total credit vs vending machine credit

  //var total credit
  //if total credit < price return credit
  //if total === price return {}
  //if the coin isn;t in this.coins, return the credit

  //else (if the credit is more than the price)
  //create var changeRequired with how much change is required

  //use Object.keys on coins, traverse backwards
    //on each iteration, turn string into number, compare to coins obj.
      //if value is greater than 0
        //subtract 1 from value-property (quantity)
        //subtract key-property (value) from changeRequired

        //set this up recursively with a base case saying changeRequired === 0
        //--OR set this up using a while(changeRequired>0) loop with a for loop(i--) nested inside.

  //var creditChange = {}


  //return creditChange;
}

var vm = new VendingMachine({1:1, 2:0, 4:3, 6:2});

// vm.vending(12, {1:3, 4:2}) // {1:3, 4:2}, 'insufficient balance'
// vm.vending(12, {1:1, 5:2}) // {1:1, 5:2}, 'insufficient balance, theres is no 5 coin in the machine'
// vm.vending(12, {4:3}) // {}, exact price
// vm.vending(12, {6:1, 2:3})// {}, 'Exact price'
// var v = vm.vending(12, {6:2})// {}, 'Exact price'
var v = vm.vending(12, {6:1, 4:2})//, {2:1}
// vm.vending(12, {6:4})//, {6:2}
// vm.vending(12, {6:4, 3:4})//, {3:4, 6:2}
// vm.vending(12, {4:5})//, {2:1, 6:1}
// vm.vending(17, {4:4, 2:1})//, {1:1}
// vm.vending(17, {4:4, 2:1})//, {}, 'There is no 1 value coins'
console.log(v)