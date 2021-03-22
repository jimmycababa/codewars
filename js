// The feast of many beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start and end with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast.

function feast(beast, dish) {
  return beast[0]===dish[0] && beast.slice(-1)===dish.slice(-1);
}

// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s) {
  let x = 27.777778
  return Math.floor(s * x)
}

// Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

// problem
var a == "dev"
var b == "Lab"
var name == a + b

// solution
var a = "dev"
var b = "Lab"
var name = a.concat(b)

// This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

var a == "code";
var b == "wa.rs"
var name == a + b

// solution
var a = "code";
var b = "wa.rs";
var name = a.concat(b);

// The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name) {
  return 'Hello, ' + name
}

// A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

function main [verb, noun]
  return verb + noun
}

// solution

function main(verb, noun){
  return verb + noun
}

// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

function greet (name, owner) {
  if(name == owner){
    return 'Hello boss'
  }else{
    return 'Hello guest'
  }
}

// I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.
// Can you help me fix the function?

function addFive(num) {
  var total = num + 5
  return num
}

// solution
function addFive(num) {
  var total = num + 5
  return total
}

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

function combineNames(first, last){
  return first.concat(' ', last)
}

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.
const solve = (x, y) => x / y

// The code provided is supposed replace all the dots . in the specified String str with dashes -
// But it's not working properly.
var replaceDots = function(str) {
  return str.replace(/./, '-');
}

// solution
var replaceDots = function(str) {
  return str.split('.').join('-');
}

// The company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents.
// 39.99 becomes $39.99
// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).
function formatMoney(amount){
  // your formatting code here
}

// solution
function formatMoney(amount){
  return "$" + Number(amount).toFixed(2)
}

// Your coworker was supposed to write a simple helper function to capitalize a string (that contains a single word) before they went on vacation.
//
// Unfortunately, they have now left and the code they gave you doesn't work. Fix the helper function they wrote so that it works as intended (i.e. make the first character in the string "word" upper case).
//
// Don't worry about numbers, special characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word) {
  word[0].toUpperCase();
  return word;
}

// solution
function capitalizeWord(word) {
 return  word.charAt(0).toUpperCase() + word.slice(1)
}
