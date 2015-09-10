var Planets = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Saturn", "Uranus", "Neptune"];

document.getElementById("vanilla_output").innerHTML = "This content generated with vanilla JavaScript";

$("#jquery_output").text("This content generated with jQuery");

function modulus(a, b) {
  var answer;
  answer = a % b;
  return answer;
};

function doMath(num1, num2, operation) {
  var answer =  operation(num1, num2);
  return answer;
}

function add(a, b) {
  return a + b;
}

function subtract(a,b) {
  return a - b;
}

console.log(doMath(5, 6, add));

console.log(doMath(50, 6, subtract));

function sortedPlanets() {
  var alphaPlanets = Planets.sort();
  return alphaPlanets;
};

function reversedPlanets() {
  var backwardsPlanets = Planets.toString().split("").reverse().join("").split(",");
  var backwardsPlanetsInOrder = [];
  for (var i = 0; i < backwardsPlanets.length; i++) {
    backwardsPlanetsInOrder.unshift(backwardsPlanets[i]);
  };
  return backwardsPlanetsInOrder;
};

function longPlanets() {
  var longOnes = [];
  for (var i = 0; i < Planets.length; i++) {
    if (Planets[i].length >= 7) {
      longOnes.push(Planets[i]);
    }
  };
  return longOnes
};

function getAnimals() {
        $.ajax({
      url:"./data/animals.json"
      }).done(function(data){
        console.log("animals", data);
      })
      .fail(function (){
        console.log("no animals today");
      });
}

getAnimals();















