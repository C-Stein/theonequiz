var FruitMaker = (function() {
  var fruits = ["apples", "bananas", "cherries", "huckleberries"]

  return {  
    getFruits: function() {
      return fruits
    },

    addFruit: function(newFruit) {
      fruits.push(newFruit);
      return fruits
    }
  }

}());
