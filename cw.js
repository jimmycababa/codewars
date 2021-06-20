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

// Write a function to split a string and convert it into an array of words. For example:

// "Robin Singh" ==> ["Robin", "Singh"]

// solution
function stringToArray(string){
  return Array.from(string).join('').split(' ')
  }
  
  // Deoxyribonucleic acid, DNA is the primary information storage molecule in biological systems. It is composed of four nucleic acid bases Guanine ('G'), Cytosine ('C'), Adenine ('A'), and Thymine ('T').

// Ribonucleic acid, RNA, is the primary messenger molecule in cells. RNA differs slightly from DNA its chemical structure and contains no Thymine. In RNA Thymine is replaced by another nucleic acid Uracil ('U').

// Create a function which translates a given DNA string into RNA.

// For example:

// "GCAT"  =>  "GCAU"
// The input string can be of arbitrary length - in particular, it may be empty. All input is guaranteed to be valid, i.e. each input string will only ever consist of 'G', 'C', 'A' and/or 'T'.
// solution
function DNAtoRNA(dna) {
  let re = /T/gi;
  return dna.replace(re, 'U')
  }

  // Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + " plays banjo" 
// name + " does not play banjo"
// Names given are always valid strings.
// solution
function areYouPlayingBanjo(name) {
  return name.startsWith('r'.toUpperCase()) || name.startsWith('R'.toLowerCase()) ? name + " plays banjo" : name + " does not play banjo"
}

// Template Strings, this kata is mainly aimed at the new JS ES6 Update introducing Template Strings
// Task
// Your task is to return the correct string using the Template String Feature.
// Input
// Two Strings, no validation is needed.
// Output
// You must output a string containing the two strings with the word ```' are '```

var TempleStrings = function (obj, feature){
  return `${obj} are ${feature}`
}

// 4/24/2021
// Your function takes two arguments:

// current father's age (years)
// current age of his son (years)
// Сalculate how many years ago the father was twice as old as his son (or in how many years he will be twice as old).
// solution
function twiceAsOld(dadYearsOld, sonYearsOld) {
  return dadYearsOld == (sonYearsOld * 2) ? 0 : Math.abs(dadYearsOld - sonYearsOld * 2)
}

// The wide mouth frog is particularly interested in the eating habits of other creatures.
//
// He just can't stop asking the creatures he encounters what they like to eat. But then he meet the alligator who just LOVES to eat wide-mouthed frogs!
//
// When he meets the alligator, it then makes a tiny mouth.
//
// Your goal in this kata is to create complete the mouth_size method this method take one argument animal which corresponds to the animal encountered by frog. If this one is an alligator (case insensitive) return small otherwise return wide.
// solution
function mouthSize(animal) {
  return animal.toLowerCase() == 'alligator' ? 'small' : 'wide'
}

// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?

// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.

// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.

// Return the total figure the individual will receive as a string prefixed with "£" (= "\u00A3", JS
// solution
function bonusTime(salary, bonus) {
  return bonus == true ? "\u00A3" + (salary * 10) : "\u00A3" + salary
  }

  // 4/25/2021
  // The code gives an error!
  a = 123.toString
  // solution
  var a = '123';
var answer = a.toString();

// Create a function that takes 2 positive integers in form of a string as an input, and outputs the sum (also as a string):
// sumStr("4", "5")    // should output "9"
  // sumStr("34", "5")   // should output "39"

// solution
function sumStr(a,b) {
  let answer =  Number(a) + Number(b)
  return answer.toString() 
  }

  // Complete the function that receives as input a string, and produces outputs according to the following table:
//
// Input	Output
// "Jabroni"	"Patron Tequila"
// "School Counselor"	"Anything with Alcohol"
// "Programmer"	"Hipster Craft Beer"
// "Bike Gang Member"	"Moonshine"
// "Politician"	"Your tax dollars"
// "Rapper"	"Cristal"
// anything else	"Beer"

function getDrinkByProfeesion(param){
  switch(param.toLowerCase()){
    case "jabroni":
      return "Patron Tequila";
    case 'school counselor':
      return "Anything with Alcohol";
    case 'programmer':
      return "Hipster Craft Beer";
    case "bike gang member":
      return "Moonshine"
    case "politician":
      return "Your tax dollars";
    case "rapper":
      return "Cristal";
    default:
      return "Beer";
  }
}

// 4/26/2021
// Inspired by the development team at Vooza, write the function that

// accepts the name of a programmer, and
// returns the number of lightsabers owned by that person.
// The only person who owns lightsabers is Zach, by the way. He owns 18, which is an awesome number of lightsabers. Anyone else owns 0.

// Note: your function should have a default parameter.
// solution
function howManyLightsabersDoYouOwn(name) {
  return name == 'Zach' ? 18 : 0
}

// Given an integral number, determine if it's a square number:

// In mathematics, a square number or perfect square is an integer that is the square of an integer; in other words, it is the product of some integer with itself.

// The tests will always use some integral number, so don't worry about that in dynamic typed languages.
// solution
var isSquare = function(n){
  return Math.sqrt(n) % 1 === 0 ? true : false
}

//4/27/2021
// There are five workers : James,John,Robert,Michael and William.They work one by one and on weekends they rest. Order is same as in the description(James works on mondays,John works on tuesdays and so on).You have to create a function 'task' that will take 3 arguments(w, n, c):

// Weekday

// Number of trees that must be sprayed on that day

// Cost of 1 litre liquid that is needed to spray tree,let's say one tree needs 1 litre liquid.

// Let cost of all liquid be x

// Your function should return string like this : 'It is (weekday) today, (name), you have to work, you must spray (number) trees and you need (x) dollars to buy liquid'
// solution
function task(w, n, c) {
  let x = n * c;
  if(w == "Monday"){
     return (`It is Monday today, James, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`)
   }else if(w == "Tuesday"){
     return (`It is Tuesday today, John, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`)
   }else if(w == "Wednesday"){
     return (`It is Wednesday today, Robert, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`)
   }else if(w == "Thursday"){
     return (`It is Thursday today, Michael, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`)
   }else if(w == "Friday"){
     return (`It is Friday today, William, you have to work, you must spray ${n} trees and you need ${x} dollars to buy liquid`)
   }
 }

//  better solution
let task = (w,n,c) => {
  let obj = {'Monday':'James','Tuesday':'John','Wednesday':'Robert','Thursday':'Michael','Friday':'William'};
  return `It is ${w} today, ${obj[w]}, you have to work, you must spray ${n} trees and you need ${n*c} dollars to buy liquid`;
};

// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
// should return "found the needle at position 5"

// solution
function findNeedle(haystack) {
  for(let i = 0; i < haystack.length; i++){
    if(haystack[i] == ('needle')){
      return "found the needle at position " + [i]
    }
  }
}

// better solution
function findNeedle(haystack) {
  return "found the needle at position " + haystack.indexOf("needle");
}
//  4/29/2021
// Convert number to reversed array of digits

// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example
// 348597 => [7,9,5,8,4,3]

function digitize(n){

}
// solution
function digitize(n){
  return n.toString().reverse().map(Number)
}

// 4/30/2021
// The first century spans from the year 1 up to and including the year 100, The second - from the year 101 up to and including the year 200, etc.
// Given a year, return the century it is in.

// Input , Output Examples :
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// solution
function century(year) {
  let century = 1/100;
    return Math.ceil(century * year)
}

// Basic Mathematical Operations
// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

//solution
unction basicOp(operation, value1, value2)
{if(operation == '+'){
  return value1 + value2
}else if(operation == '*'){
  return value1 * value2
}else if(operation == '-'){
  return value1 - value2
}else if(operation == '/'){
  return value1 / value2
  }
}

// 5/1/2021
// Write shortest function to calculate Average number of Array
// Given an array of integers, calculate the Average of these numbers.

// Main challenge is to write shortest and compact function for it.

// For example: var a = [0, 1, 2];
// avg(a) // output should be 1
// Output of function will be also checked in tests, however most important is to write the shortest possible function (code length < 100). Input will always be valid.

// solution
function avg(a){
  let sum = a.reduce((a,c) => a + c, 0)
  return sum/a.length
}

// convert an array of strings to array of numbers
// Some really funny web dev gave you a sequence of numbers from his API response as an sequence of strings!

// You need to cast the whole array to the correct type.

// Create the function that takes as a parameter a sequence of numbers represented as strings and outputs a sequence of numbers.

// ie:["1", "2", "3"] to [1, 2, 3]

// Note that you can receive floats as well.

// solution
function toNumberArray(stringarray){
  return Array.from(stringarray).map(Number)
}

// 5/2/2021
// Your task is to write a function called valid_spacing() or validSpacing() which checks if a string has valid spacing. The function should return either True or False.

// For this kata, the definition of valid spacing is one space between words, and no leading or trailing spaces. Below are some examples of what the function should return.

// 'Hello world' = true
// ' Hello world' = false
// 'Hello world  ' = false
// 'Hello  world' = false
// 'Hello' = true
// // Even though there are no spaces, it is still valid because none are needed
// 'Helloworld' = true 
// // true because we are not checking for the validity of words.
// 'Helloworld ' = false
// ' ' = false
// '' = true

function validSpacing(s){

}

// solution
function validSpacing(s) {
  return s.trim() == s && !s.includes("  ") ? true : false
}

// 5/3/2021

// Create a function that returns the average of an array of numbers ("scores"), rounded to the nearest whole number. You are not allowed to use any loops (including for, for/in, while, and do/while loops).

// solution
function average(scores) {
  let answer = scores.reduce((a,c) => a + c,0);
   return Math.round(answer / scores.length)
    
}

// Write a function that reverses the bits in an integer.

// For example, the number 417 is 110100001 in binary. Reversing the binary is 100001011 which is 267.

// You can assume that the number is not negative.

// solution
function reverseBits (n) {
  let answer = n.toString(2);
  return parseInt(answer.split('').reverse().join(''), 2)
}

// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// solution
function lovefunc(flower1, flower2){
  return flower1 % 2 !== flower2 % 2 ? true : false
}

// It is easy to join two strings together like this string1 + string2.

// Another way to get the desired result would be with string1.concat(string2)

// ES6 has introduced another way of joining strings. Your task is to find out what this is and write a function that will add two strings together, there must be a space between the two strings.

// + , .concat() & .join() will not be allowed in this exercise. I have also removed some other methods that can be used to cheat!

// If one of the arguments is a number your code must coerce it into being a string.

// solution
function joinStrings(string1, string2){
  return `${string1} ${string2}`
}

// 5/5/2021
// Just a simple sorting usage. Create a function that returns the elements of the input-array / list in a sorted manner.

sortme = function(names){
}

// solution
sortme = function(names){
  return names.sort()
}

// 5/6/2021
// Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

// invert([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
// invert([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
// invert([]) == []
// You can assume that all values are integers. Do not mutate the input array/list.

// solution
function invert(array) {
 return array.map(x => -x)
  }

  // 5/7/2021
  // Americans are odd people: in their buildings, the first floor is actually the ground floor and there is no 13th floor (due to superstition).

// Write a function that given a floor in the american system returns the floor in the european system.

// With the 1st floor being replaced by the ground floor and the 13th floor being removed, the numbers move down to take their place. In case of above 13, they move down by two because there are two omitted numbers below them.

// Basements (negatives) stay the same as the universal level.

// solution

function getRealFloor(n) {
  if(n <= 0){
    return n
  }else if(n <= 12){
    return n - 1
   }else if(n > 12){
     return n - 2
  }
}

// 5/8/2021
// Exclamation marks series #1: Remove a exclamation mark from the end of string

// Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

// solution
function remove(s){
  return s.replace(/!$/, '')
}

// 5/9/2021
// You are running the calculation 2 + 2 * 2 + 2 * 2 and expect to get the answer 32 but instead the function keeps returning 10. Fix the function to make it return 32 without changing the number or the operators.

// solution
function orderOperations () {
  return (2 + 2) * (2 + 2) * 2
}

// 5/10/2021
// Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

// The binary number returned should be a string.

// solution
function addBinary(a,b) {
  let answer = a + b;
    return answer.toString(2)
  }

  // 5/11/2021
  // validate code with simple regex
  
  // Basic regex tasks. Write a function that takes in a numeric code of any length. The function should check if the code begins with 1, 2, or 3 and return true if so. Return false otherwise.

  // solution
  function validateCode (code) {
    let codeStr = code + "";
    let regex = /^[123]/;
    return regex.test(codeStr);
  }
  // better solution
  function validateCode (code) {return /^[123]/.test(code)}

  // Write a simple regex to validate a username. Allowed characters are:

// lowercase letters,
// numbers,
// underscore
// Length should be between 4 and 16 characters (both included).

// solution
function validateUsr(username) {
  const res = /^[0-9a-z_]{4,16}$/.test(username) 
  return res
}

// 5/12/2021
// remove exclamation marks
// Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

function RemoveExclamationMarks(s){
}

// solution
function removeExclamationMarks(s) {
  let re = /!/gi
  return s.replace(re, '')
}

// 5/13/2021
// Remove all exclamation marks from the end of sentence.

// Examples
// remove("Hi!") === "Hi"
// remove("Hi!!!") === "Hi"
// remove("!Hi") === "!Hi"
// remove("!Hi!") === "!Hi"
// remove("Hi! Hi!") === "Hi! Hi"
// remove("Hi") === "Hi"

// solution
function remove(s){
  return s.replace(/!*$/g, '')
}

// 5/14/2021
// Our friend Pac has finally decided to pursue a career in the coding industry.
// He is a newbie, he needs to learn properly.
// Therefore, Pac wants to apply for the worldwide famous -and very demanding-
// 'C0d3r 1ns1d3' Academy for beginners.
// In order to join, Pac is required to solve a series of 3 exercises about 'Bug Fixes'.
// He has been sent an email from the Academy with the following instructions,

// Dear Pac,  
// This is the first exercise. Find out what's wrong and fix the code.  
// You have 15 minutes to send a solution.  
// Good Luck.
// This code is a mess! Would you help Pac to fix the code in time?

// (This might be helpful -> Math.random();)

// solution
function yourFutureCareer() {
	var career = Math.random()
		if (career <= 0.34) {
			return 'FrontEnd Developer'
		} else if (career <= 0.67) {
			return 'BackEnd Developer'
		 }else{
			return 'Full-Stack Developer'
		}
}
console.log(yourFutureCareer())

// 5/15/2021
// highest and lowest
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

// Example:

// highAndLow("1 2 3 4 5");  // return "5 1"
// highAndLow("1 2 -3 4 5"); // return "5 -3"
// highAndLow("1 9 3 4 -5"); // return "9 -5"
// Notes:

// All numbers are valid Int32, no need to validate them.
// There will always be at least one number in the input string.
// Output string must be two numbers separated by a single space, and highest number is first.

// solution
function highAndLow (numbers){
  numbers = numbers.split(' ');
  return `${Math.max(...numbers)} ${Math.min(...numbers)}`
}

// 5/16/2021
// vowel count
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// solution
function getCount(str) {
  return str.replace(/[^aeiou]/g, '').length;
 }

// vowel remover
// create a function called shortcut to remove all the lowercase vowels in a given string

// solution
function shortcut(string){
  return string.replace(/[aeiou]/g, '').toLowerCase()
}6

// 5/18/2021
// regex count lowercase letters

// Your task is simply to count the total number of lowercase letters in a string.

function lowercaseCount(str){
}

// solution
function lowercaseCount(str){
  return str.replace(/[^a-z]/g, '').length 
}

// 5/20/2021
// find the first non consecutive number

// Your task is to find the first element of an array that is not consecutive.

// By not consecutive we mean not exactly 1 larger than the previous element of the array.

// E.g. If we have an array [1,2,3,4,6,7,8] then 1 then 2 then 3 then 4 are all consecutive but 6 is not, so that's the first non-consecutive number.

// If the whole array is consecutive then return null2.

// The array will always have at least 2 elements1 and all elements will be numbers. The numbers will also all be unique and in ascending order. The numbers could be positive or negative and the first non-consecutive could be either too!


// solution
function firstNonConsecutive (arr) {
  for(let i = 0; i < arr.length - 1; i++){
    if(arr[i + 1] !== arr[i] + 1)
      return arr[i + 1]
  }
    return null
  }

  // 5/21/2021
  // For UFC fans(total beginners) Conor McGregor vs George St Pierre

//   This is a beginner friendly kata especially for UFC/MMA fans.

// It's a fight between the two legends: Conor McGregor vs George Saint Pierre in Madison Square Garden. Only one fighter will remain standing, and after the fight in an interview with Joe Rogan the winner will make his legendary statement. It's your job to return the right statement depending on the winner!

// If the winner is George Saint Pierre he will obviously say:

// "I am not impressed by your performance."
// If the winner is Conor McGregor he will most undoubtedly say:

// "I'd like to take this chance to apologize.. To absolutely NOBODY!"

// solution
var quote = function(fighter) {
  return fighter.match(/conor mcgregor/ig) ? "I'\d like to take this chance to apologize.. To absolutely NOBODY!" : "I am not impressed by your performance."
}

// alternate solution
var quote = function(fighter) {
  return fighter.toLowerCase() === "george saint pierre" ? "I am not impressed by your performance." : "I'd like to take this chance to apologize.. To absolutely NOBODY!";
};

// 5/22/2021

Operator Precendence
// Test your fundamental knowledge of arithmetic operator to operand precedence with the following scenario.

// Maria knows the formula for calculating degrees Celsius given a temperature in degrees Fahrenheit is: subtract 32, then divide the number by 9/5; but she cannot find her calculator, so she decides to write a function to calculate it but it gives the wrong answer.

// Can you help her?

// You don't have to handle non-numerical inputs, all inputs will be numerical.

function fahrenheitToCelsius(fahrenheit) {  
  return fahrenheit - 32 / 9/5;  
}

// solution
function fahrenheitToCelsius(fahrenheit) {  
  return (fahrenheit - 32) / (9/5);  
}

// 5/23/2021

// The goal is to create a function 'numberToPower(number, power)' that "raises" the number up to power (ie multiplies number by itself power times).

function numberToPower(number, power){
}

// solution

function numberToPower(number, power){
  let sum = 1;
  for(let i = 0; i < power; i++){
    sum*number
  }
  return sum
  }

  // 5/24/2021

  // words to sentence

// Write function wordsToSentence which will create a string from a list of strings, separated by space.

// Example:

// ["hello", "world"] -> "hello world"

function wordsToSentence(words){
}

// solution
function wordsToSentence(words) {
  return words.join(' ')
}

// 5/25/2021
// Exclusive "or" (xor) Logical Operator
// In some scripting languages like PHP, there exists a logical operator (e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this Kata). The exclusive or evaluates two booleans. It then returns true if exactly one of the two expressions are true, false otherwise. For example:

// false xor false == false // since both are false
// true xor false == true // exactly one of the two expressions are true
// false xor true == true // exactly one of the two expressions are true
// true xor true == false // Both are true.  "xor" only returns true if EXACTLY one of the two expressions evaluate to true.
// Task
// Since we cannot define keywords in Javascript (well, at least I don't know how to do it), your task is to define a function xor(a, b) where a and b are the two expressions to be evaluated. Your xor function should have the behaviour described above, returning true if exactly one of the two expressions evaluate to true, false otherwise.

// solution
function xor(a, b) {
  return Boolean(a) !== Boolean(b) ? true : false
}

// Create a function called _if which takes 3 arguments: a boolean value bool and 2 functions (which do not take any parameters): func1 and func2

// When bool is truth-ish, func1 should be called, otherwise call the func2.

// solution
function _if(bool, func1, func2) {
  return Boolean(bool) ? func1() : func2();
}

// 5/26/2021
// Write a function that always returns 5

// Sounds easy right? Just bear in mind that you can't use any of the following characters: 0123456789*+-/

// solution
function unusualFive() {
  return "answr".length
}

// Given a list of integers, determine whether the sum of its elements is odd or even.

// Give your answer as a string matching "odd" or "even".

// If the input array is empty consider it as: [0] (array with a zero).

function oddOrEven(array) {
}

// solution
function oddOrEven(array) {
  let answer = array.reduce((a,c) => a + c, 0);
    return answer % 2 == 0 ? "even" : "odd"
  }

  // 5/27/2021
  // string ends with?

// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

  // solution
  function solution(str, ending){
    return str.endsWith(ending)
  }

  // unfinished loop - bug fixing
  // Oh no, Timmy's created an infinite loop! Help Timmy find and fix the bug in his unfinished for loop!

  function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number;){
      newArray.push(counter);
    }
    
    return newArray;
  }

  // solution
  function createArray(number){
    var newArray = [];
    
    for(var counter = 1; counter <= number; counter++){
      newArray.push(counter);
    }
    
    return newArray;
  }

  // 5/28/2021
  // find the position
  // When provided with a letter, return its position in the alphabet.

// Input :: "a"

// Ouput :: "Position of alphabet: 1"

function position(letter){
}

// solution
function position(letter){
  const alphabet = ["","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
return 'Position of alphabet:' + " " + alphabet.indexOf(letter)
}

// 5/29/2021
// merge two sorted arrays into one
// You are given two sorted arrays that both only contain integers. Your task is to find a way to merge them into a single one, sorted in asc order. Complete the function mergeArrays(arr1, arr2), where arr1 and arr2 are the original sorted arrays.

// You don't need to worry about validation, since arr1 and arr2 must be arrays with 0 or more Integers. If both arr1 and arr2 are empty, then just return an empty array.

// Note: arr1 and arr2 may be sorted in different orders. Also arr1 and arr2 may have same integers. Remove duplicated in the returned result.

function mergeArrays(arr1,arr2){
}

// solution
function mergeArrays(arr1, arr2) {
  let result = [...new Set ([...arr1, ...arr2])];
  return result.sort((a,b) => a-b,0);
  
  }

  // better solution
  function mergeArrays(arr1, arr2) {
    return Array.from(new Set(arr1.concat(arr2).sort((a,b) => (a-b))));
  }

  // 5/31/2021
  // remove duplicates from list
// Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same.

  // solution
  function distinct(a) {
    return [...new Set(a)];

    // 6/4/2021
    // return negative (refactor)

    // In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
    // The number can be negative already, in which case no change is required.
// Zero (0) is not checked for any specific sign. Negative zeros make no mathematical sense.

// solution
function makeNegative(num) {
  return Math.abs(num) * -1.
}

// 6/6/2021
// vowel changer
// Create a function that changes all the vowels (excluding y) in a string, and changes them all to the same vowel. The first parameter of the function is the string, and the second is the vowel that all the vowels in the string are being changed to.

// solution
function vowelChange(str, vow) {
  return str.replace(/[aeiou]/ig, vow)
  }

  // all star code challenge #1
  // This Kata is intended as a small challenge for my students

// Write a function, called sumPPG, that takes two NBA player objects/struct/Hash/Dict/Class and sums their PPG

function sumPPG(playerOne, playerTwo){

}

// solution
function sumPPG(playerOne, playerTwo){
  return playerOne.ppg + playerTwo.ppg
    }

    // 6/7/2021
    // USD => CNY
    // Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer, and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'
    // The conversion rate you should use is 6.75 CNY for every 1 USD. All numbers shold be rounded to the nearest hundredth (e.g. 21.00 NOT 21.0 or 21) (HINT: google toFixed)

    function usdcny(usd){

    }

    // solution
    function usdcny(usd) {
      let cny = usd * 6.75
      return cny.toFixed(2) + ' ' + 'Chinese Yuan'
    }

    // 6/8/2021
    // Return the day
    // Complete the function which returns the weekday according to the input number:

// 1 returns "Sunday"
// 2 returns "Monday"
// 3 returns "Tuesday"
// 4 returns "Wednesday"
// 5 returns "Thursday"
// 6 returns "Friday"
// 7 returns "Saturday"
// Otherwise returns "Wrong, please enter a number between 1 and 7"


    // solution
    function whatday(num) { 
      if(num == 1){
        return "Sunday"
      }else if(num == 2){
        return "Monday"
      }else if(num == 3){
        return "Tuesday"
      }else if(num == 4){
        return "Wednesday"
      }else if(num == 5){
        return "Thursday"
      }else if(num == 6){
        return "Friday"
      }else if(num == 7){
        return "Saturday"
      }else{
        return "Wrong, please enter a number between 1 and 7"
      }
      
      // 06/11/2021
// Correct the mistakes of the character recognition software
// Character recognition software is widely used to digitise printed texts. Thus the texts can be edited, searched and stored on a computer.

// When documents (especially pretty old ones written with a typewriter), are digitised character recognition softwares often make mistakes.

// Your task is correct the errors in the digitised text. You only have to handle the following mistakes:

// S is misinterpreted as 5
// O is misinterpreted as 0
// I is misinterpreted as 1
// The test cases contain numbers only by mistake.

// solution
function correct(string)
{
 return string.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I")
}

// 6/12/2021
// Grasshopper - array mean
// Find the mean (average) of a list of numbers in an array.

// solution
var findAverage = function (nums) {
  let sum = nums.reduce((a,b) => a + b, 0)
  return sum / nums.length
}

// 6/13/2021
// Say hello
// Write a function to greet a person. Function will take name as input and greet the person by saying hello. Return null/nil/None if input is empty string or null/nil/None.

function greet(name){
  
}


// solution
function greet(name) {
  return name ? `hello ${name}!` : null
  }

  // 6/16/2021
// Thinkful Number Drills: Congo Warehouses

// Your company, Congo Pizza, is the second-largest online frozen pizza retailer. You own a number of international warehouses that you use to store your frozen pizzas, and you need to figure out how many crates of pizzas you can store at each location.

// Congo recently standardized its storage containers: all pizzas fit inside a cubic crate, 16-inches on a side. The crates are super tough so you can stack them as high as you want.

// Write a function box_capacity() that figures out how many crates you can store in a given warehouse. The function should take three arguments: the length, width, and height of your warehouse (in feet) and should return an integer representing the number of boxes you can store in that space.

// For example: a warehouse 32 feet long, 64 feet wide, and 16 feet high can hold 13,824 boxes because you can fit 24 boxes across, 48 boxes deep, and 12 boxes high, so box_capacity(32, 64, 16) should return 13824.

  // solution
  function boxCapacity(length, width, height) {
    let h1 = Math.floor((length*12)/16)
    let w1 = Math.floor((width*12)/16)
    let h2 = Math.floor((height*12)/16)
    return (h1 * w1 * h2)
  }

  // My head is at the wrong end!
// You're at the zoo... all the meerkats look weird. Something has gone terribly wrong - someone has gone and switched their heads and tails around!

// Save the animals by switching them back. You will be given an array which will have three values (tail, body, head). It is your job to re-arrange the array so that the animal is the right way round (head, body, tail).

// Same goes for all the other arrays/lists that you will get in the tests: you have to change the element positions with the same exact logics

function fixTheMeerkat(arr){
  
}

  // solution
  function fixTheMeerkat(arr) {
    return arr.reverse()
   }

  //  6/18/2021
  // Use variables to find the sum of the goals Messi scored in 3 competitions

// Information
// Messi goal scoring statistics:

// Competition	Goals
// La Liga	43
// Champions League	10
// Copa del Rey	5
// Task
// Create these three variables and store the appropriate values using the table above:
// laLigaGoals
// championsLeagueGoals
// copaDelReyGoals
// Create a fourth variable named totalGoals that stores the sum of all of Messi's goals for this year.

var laLigaGoals
var championsLeagueGoals
var copaDelReyGoals

var totalGoals

// solution
var laLigaGoals = 43
var championsLeagueGoals = 10
var copaDelReyGoals = 5

var totalGoals = laLigaGoals + championsLeagueGoals + copaDelReyGoals

// 6/19/2021
// Beginner - reduce but grow
// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:

// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

// solution
function grow(x){
  return x.reduce((a,b) => a*b)
  }

  // 6/21/2021
  // is n divisible by x and y
// Create a function that checks if a number n is divisible by two numbers x AND y. All inputs are positive, non-zero digits.

function isDivisible(n,x,y){
  
}

  // solution
  function isDivisible(n, x, y) {
    return n % y== 0 && n % x == 0 ? true : false
  }