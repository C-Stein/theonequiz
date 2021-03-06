# One Quiz to Rule Them All

> **Instructions:**
>
> Fork this repository into your Github account. Any questions that require you to answer in your own words, but not write code (e.g. question 12) just edit this README with your answer.

## Setup

```
cd lib && bower install
cd ..
http-server
```

## Basics

> For this section, I wrote some starter DOM elements in the `index.html` file.

1. Write a selector that selects only the first sibling li elements.
2. Make all li elements behave as inline elements.
3. Only the odd section elements should have a border.
4. Only the even li elements should have a lime background.
5. Only the first aside element in the 2nd section should have blue font color.
6. There are three div elements with instructions inside them about which side of the screen they should be displayed on. Follow those instructions.
7. Using vanilla JavaScript, update the HTML of the element with the id of `vanilla_output` with the following text: "This content generated with vanilla JavaScript".
8. Using jQuery, update the HTML of the element with the id of `jquery_output` with the following text: "This content generated with jQuery".

## JavaScript concepts
1. Explain what hoisting is. Provide your answer below.
  Hoisting is a behavior in JavaScript where all variables declared within a particular scope are interpreted by the browser as having been declared at the top of that scope (file or function), regardless of where in the script they were written. To account for this behavior, it is common practice for developers to declare variables at the top of any given scope since that is where the browser will interpret them anyways.

 
1. What is a callback? Why do we use them in JavaScript? Provide your answer, and code a simple example below.
  A callback is a function called by another function. They can be used in JavaScript to keep functions as small and reusable as possible, and also to handle asynchronous requests appropriately.
```


```


## Functions and operators

> In `main.js` do the following:

1. Write a function named `modulus` that takes two arguments. The function should use the modulo operator to return the remainder between the first and second arguments.  e.g. `modulus(10, 3) // Should return 1`.
1. Write a function named `doMath`. This function takes three arguments.  The first two will contain integer values. The third argument will be a function reference. Write two more functions named `add` and `subtract`. Execute the `doMath` function to add two numbers together. Then execute the `doMath` function to subtract the two numbers.

## Arrays

> In the `main.js`, I started you off with a simple array.

1. Write a function named `sortedPlanets` that returns an array of the planet names sorted alphabetically.
1. Write a function named `reversedPlanets` that returns an array of planet names that are reversed (i.e. "htraE").
1. Write a function named `longPlanets` that returns an array containing only the planet names that are 7 characters long, or longer.

## IIFE

1. In the file named `IIFE.js`. Write an IIFE that defines a global variable named **FruitMaker**. It should contain a private array holding the following strings: "apples", "bananas", "cherries", "huckleberries".
1. The IIFE should expose in its public interface a getter named `getFruits()` that returns all fruits, and a setter named `addFruit()` that provides the ability to add a new fruit to the array.
1. In the file named `AugmentedIIFE.js`, augment **FruitMaker** with a function named `slices()` that accepts two arguments: the name of the fruit, and the number of slices to make. It should return an array containing the name of the fruit duplicated how ever many slices was requested.

  For example: `slices("apples", 2)` should return `["apples", "apples"]`

## XHR

1. Write a function named `getAnimals` that uses the jQuery `ajax` method to retrieve the `data/animals.json` file. When you execute the functions, it should just log *just the array* of animals to the console when the async is complete. Make sure you provide a prompt of "animals" when logging the array.
1. What are the four HTTP verbs that you can use in an XHR that correspond to the CRUD actions (create, read, update, delete)?
  PUT GET POST DELETE

1. Why did we use Promises when dealing with asynchronous XHR calls?
  Since the asynchronous nature of those calls means that the information may or may not be returned  before other code is run or the page has loaded, promises allow a function to "wait" on the asynchronous call to complete before running.

1. Provide a simple example of the syntax for handling a Promise.
  ```
   function doAwesome() { 
    var deferred = Q.defer();                      <- declare a variable = Q.defer();

      $.ajax({
      url:"./promises/awesome.json"
      }).done(function(data){
        deferred.resolve(data);                     <- this saves your data in a promise for later
      })
      .fail(function (xhr, status, error){
        deferred.reject(error);                     <- this saves your error in a promise for later
      });

    return deferred.promise;                        <- you must return the promise so it can be used outside the function
  }
  ```
  
  ```
  doAwesome().then(function(data) {                   <- .then() syntax recalls your data!
    console.log("Look at this awesome data!", data);
  }
  ```

## Scope and this

What gets logged to the console when the following code executes? Explain why.

- 42. Because Life, the Universe, and Everything. Also, the function called is steve(). Even though there are "answers" declared in luke() and greg(), those "answers" are limited in scope to those functions and don't affect the global variable "answer". Steve() is called in the global scope, and therefore uses the global variable. (Global variable means that the variable is first declared with the "var" keyword outside of any function.)

```
var answer = "42";

function steve() {
  luke();
}

function luke() {
  var answer = "0";
  greg(answer);
}

function greg(answer) {
  var answer = "666";
  console.log( this.answer );
}

steve();
```

