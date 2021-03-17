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
