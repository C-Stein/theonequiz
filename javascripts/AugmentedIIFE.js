var FruitMaker = (function(otherFruit) {


otherFruit.slices = function(fruit, numSlices) {
  var fruitSlices = [];
  for (var i = 0; i < numSlices; i++) {
    fruitSlices.push(fruit);
  };
  return fruitSlices;
}

return otherFruit;

}(FruitMaker));