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

//   who remembers back to their time in the schoolyard when girls would take a flower and tear its petals saying each of the following phrases each time a petal was torn 
// i love you, a little, a lot, passionately, madly, not at all
// when the last petal was torn there were cries of excitement dreams surging thoughts and emotions. Your goal in this kata is to determine  which phrase the girls would say for a flower of a given number of petals. where nb_petals > 0

// solution
function howMuchILoveYou(nbPetals){
    if(nbPetals%6 == 1){
        return "I love you"
    }else if(nbPetals%6 == 2){
        return "a little"
    }else if(nbPetals%6 == 3){
        return "a lot"
    }else if(nbPetals%6 == 4){
        return "passionately"
    }else if(nbPetals%6 == 5){
        return "madly"
    }else{
        return "not at all"
    }
}

// There's a "3 for 2" (or "2+1" if you like) offer on mangoes. For a given quantity and price (per mango), calculate the total cost of the mangoes.
function mango(quantity, price){
    let answer = quantity - Math.floor(quantity / 3)
    return answer * price
    }

    // time to test your basic knowledge in functions. return the odds from a list:

    function odds(values){
        return values.filter(n => n % 2);
    }

//     Your classmates asked you to copy some paperwork for them. You know that there are 'n' classmates and the paperwork has 'm' pages.

// Your task is to calculate how many blank pages do you need. If n < 0 or m < 0 return 0.

function paperwork(n, m) {
    return n<=0 || m<=0 ? 0 : n*m
  }

//   It's a well known fact that anything Chuck Norris wants, he gets. As a result Chuck very rarely has to use the word false.

// It is a less well known fact that if something is true, and Chuck doesn't want it to be, Chuck can scare the truth with his massive biceps, and it automatically becomes false.

// Your task is to be more like Chuck (ha! good luck!). You must return false without ever actually using the word false...

// Go show some truth who's boss!

function ifChuckSaysSo(){
    let chuck = true
    return !chuck
  }

//   your job is simple, if (x) squared is more than 1000 return 'its hotter than the sun!!, else return 'Help yourself to a honeycomb yorkie for the glovebox. X will either a string or a number. both are valid

function apple(x){
    if(x**2 >= 1000){
        return 'It\'s hotter than the sun!!'
    }else{
        return 'Help yourself to a honeycomb yorkie for the glovebox'
    }
}

// Coding in function trueOrFalse, function accept 1 parameters:val, try to use the conditional statement if...else, if val value is false (val==false or it can convert to false), should return a string "false", if not, return a string "true".

function trueOrFalse(val){
    return Boolean(val) ? 'true' : 'false';
  }

//  write a function named repeater() that takes in two arguments (a string and a number) and returns a new string where the input  string is repeated that many times

function repeater(string, n) {
    return string.repeat(n)
}

// alternate answer
function repeater(string, n){
    let answer = string.repeat(n);
    return (`${answer}`)
}

// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, update_light('green') should return 'yellow'.

function updateLight(current) {
    if(current == 'green'){
      return 'yellow'
    }else if (current == 'yellow'){
      return 'red'
    }else if (current == 'red'){
      return 'green'
    }
  
  }

// this challenge extends the previous repeater( challenge). just like the last time, your job is to write a function that accepts a string and a number as arguments. this time, however, you should format the sting you return like this:

function repeater(string, n){
    let answer = string.repeat(n)
    return (`${string} repeated ${n} times is "${answer}"`)
}

// this function should take two string parameters: a persons name (name) and a quote of theirs (quote) and return a string attributing the quote to the person in the following format: 

// [name] said: "[quote]"
// for example if name is 'grae' and 'quote' is 'practice makes perfect' then your function should return the string
// 'grae' said: 'practice makes perfect'
// unfortunately something is wrong with the instructions in the function body. your job is to fix it so the function returns correctly formatted quotes.

def quotable(name, quote):
return name + ' said ' + '"'+quote+'"'

// Beautiful is better than ugly.
// Explicit is better than implicit.
// Simple is better than complex.
// Complex is better than complicated.

// Write a function, format_poem() that takes a string like the one line example as an argument and returns a new string that is formatted across multiple lines with each new sentence starting on a new line when you print it out.

// Try to solve this challenge with the str.split() and the str.join() string methods.

// Every sentence will end with a period, and every new sentence will have one space before the previous period. Be careful about trailing whitespace in your solution.

function formatPoem(poem) {
    return poem.split('. ').join('.\n')
  }

//   This Kata is intended as a small challenge for my students

// All Star Code Challenge #22

// Create a function that takes an integer argument of seconds and converts the value into a string describing how many hours and minutes comprise that many seconds.

// Any remaining seconds left over are ignored.

// Note:
// The string output needs to be in the specific form - "X hour(s) and X minute(s)"

function toTime(seconds) {
    let answer = Number(Math.floor(seconds / 3600))
    let answer2 = Number(Math.floor(seconds / 60) % 60)
    return answer.toFixed(0) + " hour(s)" + " and " + answer2.toFixed(0) + " minute(s)"
    }

    // write function RemoveExclamationMarks which removes all exclamation marks from a given string. 
    def remove_exclamation_marks(s):
    return s.replace('!', '')

    // Create a function, called removeVowels (or remove_vowels), that takes a string argument and returns that same string with all vowels removed (vowels are "a", "e", "i", "o", "u").

    var removeVowels = function(str){
        return str.replace(/[aeiou]/gi, '');
    

    // All Star Code Challenge #28

// You've been annoyed by weather reports one time too many! Celsius...Fahrenheit...why don't they ever give both!?

// Create a function called convertCF()/convert_c_f() (depending on language) that accepts 2 arguments, an integer of the temperature, and a string of length 1 ("c" or "f") denoting which scale the integer should be converted to (Celsius and Fahrenheit, respectively). The function should return a number, which is the conversion from one scale to the other.

// By default, the conversion should convert to Celsius if a 2nd argument is not provided; in Python, Ruby and Crystal round up to the first digit.

// convertCF(60, "f"); // => 140
// convertCF(32, "c"); // => 0
// convertCF(50); // => 10
// convertCF(100, "w"); // => Error
// Info on how to operate the conversion

// Note: If the 2nd argument provided is NOT "c" or "f", an error (InvalidArgumentException in PHP) should be thrown. The conversion should work with negative numbers, too.

function convertCF(num, scale){
    if (scale==='f') return num*9/5+32
    if (scale==='c') return (num-32)*5/9
    if (scale===undefined) return (num-32)*5/9
    throw new Error()
  
  }

// Given a string of arbitrary length with any ascii characters. Write a function to determine whether the string contains the whole word "English".

// The order of characters is important -- a string "abcEnglishdef" is correct but "abcnEglishsef" is not correct.

// Upper or lower case letter does not matter -- "eNglisH" is also correct.

// Return value as boolean values, true for the string to contains "English", false for it does not.

function spEng(sentence){
    let answer = sentence.toLowerCase()
  return answer.includes("english") ? true : false
  }

// Bob is working as a bus driver. However, he has become extremely popular amongst the city's residents. With so many passengers wanting to get aboard his bus, he sometimes has to face the problem of not enough space left on the bus! He wants you to write a simple program telling him if he will be able to fit all the passengers.
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus excluding the driver.
// wait is the number of people waiting to get on to the bus excluding the driver.
// If there is enough space, return 0, and if there isn't, return the number of passengers he can't take.

function enough(cap, on, wait) {
    let answer = on + wait
    return cap >= on+wait ? 0 : answer % cap || cap % answer
  }

// Given an array of integers your solution should find the smallest integer
// For example: Given [34, 15, 88, 2] your solution will return 2
// Given [34, -345, -1, 100] your solution will return -345

class SmallestIntegerFinder{
    findSmallestInt(args){
        return Math.min.apply(Math, args);
    }
}

// Write a function to get the first elements of asequence. Passing a parameter n (default=1) will return the first n elements of the sequence.

// If n == 0 return an empty sequence []

function first(arr, n) {
    return arr.slice(0,n || n !== 0) 
  }

//   Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.
// Example:
// 'acb' --> 'bca'
// 'aabacbaa' --> 'bbabcabb'

function switcheroo(x){
    let result = x.replace(/[ba]/g, x => x == 'a' ? 'b' : 'a');
    return result
  }

//   Create a method take that accepts a list/array and a number n, and returns a list/array array of the first n elements from the list/array.

function take(arr, n) {
    return arr.slice(0, n)
  }

//   here we have a function that helps us spam our hearty laughter. but is not working!! i need you to find out why...
// expected results:
// spam(1); hue
// spam(6); huehuehuehuehuehue

function spam(number){
    let total = 'hue';
    return total.repeat(number)
}
// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

// solution
function bmi(weight, height) {
    let answer = weight / (height**2)
      if(answer <= 18.5){
        return "Underweight"
      }else if(answer <= 25.0){
        return "Normal"
      }else if(answer <= 30.0){
        return "Overweight"
      }else{
        return "Obese"
      }
  }

//   Write function splitSentence which will create a list of strings from a string.

// Example:

// "hello world" -> ["hello", "world"]

// solution
function splitSentence(s) {
    let answer =  s.split(' ');
    return answer
  }

//   JavaScript Arrays support a filter function (starting in JavaScript 1.6). Use the filter functionality to complete the function given.

// The solution would work like the following:

// getEvenNumbers([2,4,5,6]) // should == [2,4,6]

// solution
function getEvenNumbers(numbersArray){
    return numbersArray.filter(num => num % 2 === 0)
  }

//   Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

//solution

function disemvowel(str) {
  return str.replace(/[aeiou]/gi, '');
}

// Given an array of integers, find the one that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    return A.reduce((a,b) => a ^ b))
}

// 4/19/2021
// You will be given an array and a limit value. You must check that all values in the array are below or equal to the limit value. If they are, return true. Else, return false.

// You can assume all values in the array are numbers.

// solution

function smallEnough(a, limit){
  let answer = [];
    return a.every(answer => answer <= limit) ? true : false
}

// Complete function howManydays, function accept 1 parameters:month, means the month of year, different month has different days (refer to the following table), return a number that how many days in this month(month is always greater than 0, less than or equal to 12).

// solution
function howManydays(month){
  switch (month){
  case 1:
      return Number('31')
  case 2:
      return Number('28')
  case 3:
      return Number('31')
  case 4:
      return Number('30')
  case 5:
      return Number('31')
  case 6:
      return Number ('30')
  case 7:
      return Number('31')
  case 8:
      return Number('31')
  case 9:
      return Number('30')
  case 10:
      return Number('31')
  case 11:
      return Number('30')
  case 12:
      return Number('31')
      break;
  }
  
}

// The XOR operator (^) returns TRUE if both the operands are complementary to each other and returns FALSE if both the operands are the same.

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.
//
// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

const quarterOf = (month => {
  if(month <= 3) {
    return 1
  }else if(month > 3 && month <= 6){
    return 2
  }else if(month > 6 && month <= 9){
    return 3
  }else{
    return 4
  }
})

// 4/20/2021

// Coding in function bigToSmall. function accept 1 parameter arr(2D number array).

// Your task is: First to all, refer to the example above, flat output arr to a one-dimensional array.

// And then sort array in descending order.

// Finally, use the separator ">" to connect the elements into a string.

// Don't complain about the situation like 1>1 is not reasonable, it is just a separator.

// solution
function bigToSmall(arr){
  let result = [].concat(...arr)
  return result.sort((a,b) => b - a).join('>')
}

// 4/20/2021
// Your task is to make a function that can take any non-negative integer as an argument and return it with its digits in descending order. Essentially, rearrange the digits to create the highest possible number.

// ***the plus sign at the front is shorthand to convert it to a number***
// solution
function descendingOrder(n){
  return +('' + n).split('').sort().reverse().join('')
  
}

// 4/21/2021
// Given a non-negative integer, return an array / a list of the individual digits in order.

// Examples:

// 123 => [1,2,3]

// 1 => [1]

// 8675309 => [8,6,7,5,3,0,9]

// solution
function digitize(n) {
  return n.toString().split('').map(n => parseInt(n))
}

// 4/21/2021
// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// Looking for more, loop-restrained fun? Check out the other kata in the series:

// solution
function check(a,x){
  return a.includes(x) ? true : false
};

// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// solution
function reverse(string){
  let answer = string.split(' ').reverse(',').join(' ');
  return answer
}

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// Patrick Feeney => P.F

// solution
function abbrevName(name){
  return name.split(' ').map(i => i.charAt(0)).join('.').toUpperCase()
  }

