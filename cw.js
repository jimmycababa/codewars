// The feast of many beasts
// All of the animals are having a feast! Each animal is bringing one dish. There is just one rule: the dish must start with the same letters as the animal's name. For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.
// Write a function feast that takes the animal's name and dish as arguments and returns true or false to indicate whether the beast is allowed to bring the dish to the feast .

function feast(beast, dish){
    return beast[0] === dish[0] && beast.slice(-1) === dish.slice(-1)
}

//  The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

function cockroachSpeed(s){
    let x = 27.777778
    return Math.floor(s * x)
}

// Fix the variables assignments so that this code stores the string 'devLab' in the variable name

// problem
var a == "dev"
var b == "Lab"
var name == a + b

// solution
var a == "dev"
var b == "Lab"
var name == a.concat(b)

// This code should store "codewars" as a variable called name but its not working. Can you figure out why?

// problem
var a == "code"
var b == "wars"
var name == a + b

// solution
var a == "code"
var b == "wars"
var name == a.concat(b)

// The starship enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

function sayHello(name){
    return 'Hello, ' + name
}

// a student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

// problem 
function main[verb, noun]
return verb + noun

// solution
function main(verb, noun){
    return verb + noun
}

// create a function that gives a personalized greeting. This function takes two parameters: name and owner.
// use conditionals to return the proper message: name equals owner 'Hello boss' otherwise 'Hello guest'

function greet (name, owner){
    if(name == owner){
        return 'Hello boss'
    }else{
        return 'Hello guest'
    }
}

// I created this function to add five to any number that was passed into it and return the new value. It doesn't throw any errors but it returns the wrong number. Can you help me fix the function?

// problem
function addFive(num){
    var total = num + 5
    return num

    // solution
    function addFive(num){
        var total = num + 5
        return total
    }
}

// Create a function named combineNames that accepts two parameters (first and last name). The function should return the full name.

function combineNames(first, last){
    return first.concat('', last)
}

// This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

const solve = (x, y) => x / y

// The code provided is supposed to replace all the dots in the specified string (str) with dashes but its not working properly.

//  problem
var replaceDots = function(str){
    return str.replace(/./, '-')
}
// solution
var replaceDots = function(str){
    return str.split('.').join('-')
}

// the company you work for has just been awarded a contract to build a payment gateway. In order to help move things along, you have volunteered to create a function that will take a float and return the amount formatting in dollars and cents. 39.99 becomes $39.99
// the rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you wont have to worry about a dangling period)

function formatMoney(amount){
    return "$" + Number(amount).toFixed(2)
}

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// your coworker was supposed to write a function to capitalize a string (that contains a single word) before they went on vacation. unfortunately they now left and the code they gave you doesn't work. fix the helper function they wrote  so that it works as intended  (ie make the first character in the string "word" uppercase). dont worry about numbers, characters, or non-string types being passed to the function. The string lengths will be from 1 character up to 10 characters, but will never be empty.
function capitalizeWord(word){
    word(  0 ).toUpperCase();
    return word
}

// solution
function capitalizeWord(word){
    return word.charAt(0).toUpperCase() + word.slice(1)
}
// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.
function litres(time) {
    let litres = .5;
    return Math.floor(litres * time)
  }

//   Alex just got a new hula hoop, he loves it but feels discouraged because his little brother is better than him

//   Write a program where Alex can input (n) how many times the hoop goes round and it will return him an encouraging message :)
  
//   -If Alex gets 10 or more hoops, return the string "Great, now move on to tricks".
  
//   -If he doesn't get 10 hoops, return the string "Keep at it until you get it".
function hoopCount (n) {
    return n >=10 ? "Great, now move on to tricks" : "Keep at it until you get it" 
 }

//  The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc. Given a year, return the century it is in.
function century(year) {
    let century = 1/100;
      return Math.ceil(century * year)
  }


