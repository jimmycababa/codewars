<!-- 7/11/2021 -->
Multiply - first ruby code ever. This code does not execute properly. Try to figure out why

<!-- problem  -->
def multiply(a b)
return a * b
end

<!-- solution -->
def multiply(a, b)
  return a * b
end

<!-- 7/12/2021 -->
Even or odd - Create a function (or write a script in Shell) that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

<!-- problem -->
def even_or_odd(number)

<!-- solution -->
def even_or_odd(number)
if number % 2 == 0
  return "Even"
  else
  return "Odd"
end
  end

  <!-- 7/13/2021 -->
   Opposite number - Very simple, given a number, find its opposite.
  
  <!-- problem -->
  def opposite
  
  end

<!-- solution -->
def opposite(num)
num * -1
end

<!-- 7/14.2021 -->
Convert boolean values to strings 'Yes' or 'No' - Complete the method that takes a boolean value and return a "Yes" string for true, or a "No" string for false.

<!-- problem -->
def bool_to_word bool

end

<!-- solution -->
def bool_to_word bool
  bool ? "Yes" : "No"
end

<!-- 7 /15/2021 -->
Convert a Booleans to a string - mplement a function which convert the given boolean value into its string representation.

<!-- problem -->
def boolean_to_string(b)
return
end

<!-- solution -->
def boolean_to_string(b)
  return b.to_s
end

<!-- 7/18/2021 -->
Reversed Strings - Complete the solution so that it reverses the string passed into it.

<!-- problem -->
def solution(str)

end

<!-- solution -->
def solution(str)
str.reverse
end


Reversing Words in a String - You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

Example (Input --> Output)

"Hello World" --> "World Hello"
"Hi There." --> "There. Hi"

<!-- problem -->
def reverse(string)

end

<!-- solution -->
def reverse(string)
  string.split(' ').reverse.join(' ')
end

<!-- 7/19/2021 -->
Convert a string to a Number! - We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

<!-- problem -->
def string_to_number(s)

end

<!-- solution -->
def string_to_number(s)
s.to_i
end

<!-- 7/20/21 -->
Diemvowel Trolls - Trolls are attacking your comment section!

A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

Your task is to write a function that takes a string and return a new string with all vowels removed.

For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

Note: for this kata y isn't considered a vowel.

<!-- problem -->
def disemvowel(str)

end

<!-- solution -->
def disemvowel(str)
  str.gsub(/[aeiou]/i, '')
end

<!-- 7/21/21 -->
Messi Goals Function - Messi is a soccer player with goals in three leagues:

LaLiga
Copa del Rey
Champions
Complete the function to return his total number of goals in all three leagues.

<!-- problem -->
def goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals)

end

<!-- solution -->
def goals (laLigaGoals, copaDelReyGoals, championsLeagueGoals)
  laLigaGoals + copaDelReyGoals + championsLeagueGoals
end

<!-- better solution -->
def goals(*goals)
  goals.sum
end

<!-- 7/22/21 -->
Grasshopper - Basic function fixer - I created this function to add five to any number that was passed in to it and return the new value. It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

<!-- problem -->
def addFive(num)
  res = num + 5
  return num
end

<!-- solution -->
def addFive(num)
  res = num + 5
  return res
end

<!-- better solution -->
def addFive(num)
  num + 5
end

Grasshopper - function syntax debugging - A student was working on a function and made some syntax mistakes while coding. Help them find their mistakes and fix them.

<!-- problem -->
def main[verb, noun]
return ;
verb + noun
}

<!-- solution -->
def main(verb, noun)
  return verb + noun
  end

  <!-- 7/23/21 -->
  Grasshopper debug sayHello - The starship Enterprise has run into some problem when creating a program to greet everyone as they come aboard. It is your job to fix the code and get the program working again!

  <!-- problem -->
  def say_hello(name)
  "Hello"
  end

  <!-- solution -->
  def say_hello(name)
  "Hello," + ' ' + name
end

Grasshopper If-else syntax debug - While making a game, your partner, Greg, decided to create a function to check if the user is still alive called checkAlive/CheckAlive/check_alive. Unfortunately, Greg made some errors while creating the function.

checkAlive/CheckAlive/check_alive should return true if the player's health is greater than 0 or false if it is 0 or below.

The function receives one parameter health which will always be a whole number between -10 and 10.

<!-- problem -->
def check_alive(health)
if ()
health < 0
return False
else
return True
end
end

<!-- solution -->
def check_alive(health)
  if health > 0
    return true
  else
    return false
  end
end

<!-- better solution -->
def check_alive(health)
  health.positive?
end

<!-- or -->
def check_alive(health)
  health > 0
end

<!-- 7/24/21 -->
Grasshopper - Variable Assignment Debug - Fix the variables assigments so that this code stores the string 'devLab' in the variable name.

<!-- problem -->
a == "dev"
b == "Lab"

name == a + b

<!-- solution -->
a = "dev"
b = "Lab"

name = a + b

Basic variable assignment - This code should store "codewa.rs" as a variable called name but it's not working. Can you figure out why?

<!-- problem -->
a == "code"
b == "wa.rs"
name == a + b

<!-- solution -->
a = "code"
b = "wa.rs"
name = a + b

Training JS #7: if..else and ternary operator - Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accept 1 parameters:n, n is the number of customers to buy hotdogs, different numbers have different prices (refer to the following table), return a number that the customer need to pay how much money.

<!-- problem -->
def sale_hotdogs(n)

end

<!-- solution -->
def sale_hotdogs(n)
  if n < 5
    return n*100 
    elsif n >= 5 && n < 10
    return n*95
    elsif n >= 10
    return n*90
    end
end

<!-- way better solution -->
def sale_hotdogs(n)
  n * (n < 5 ? 100 : n < 10 ? 95 : 90)
end

<!-- 7/25/21 -->
Remove first and last character - It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

<!-- problem -->
def remove_char(s)
end

<!-- solution -->
def remove_char(s)
s[1...-1]
end

Remove String Spaces - Simple, remove the spaces from the string, then return the resultant string.

<!-- problem -->
def no_space(s)
end

<!-- solution -->
def no_space(x)
x.delete(' ')
end

<!-- other solution -->
def no_space(x)
x.gsub(' ', '')
end

<!-- 7/26/21 -->
Function 1 hello world - Make a simple function called greet that returns the most-famous "hello world!".

<!-- solution -->
def greet
  string = "hello world!"
  end

  <!-- 7/28/2021 -->
  Jennys secret message - Jenny has written a function that returns a greeting for a user. However, she's in love with Johnny, and would like to greet him slightly different. She added a special case to her function, but she made a mistake.

Can you help her?

<!-- problem -->
def greet(name)
return "Hello, #{name}!"
eturn "Hello, my love!" if name == "Johnny"
end

<!-- solution -->
def greet(name)
  name == "Johnny" ? "Hello, my love!" : "Hello, #{name}!"
end

Reversed Words - Complete the solution so that it reverses all of the words within the string passed in.

<!-- problem -->
def solution(sentence)
end

<!-- solution -->
def solution(sentence)
  sentence.split(' ').reverse.join(' ')
end

<!-- 7/29/21 -->
Convert a number to a string - We need a function that can transform a number into a string.

What ways of achieving this do you know?

<!-- problem -->
def number_to_string(num)
end

<!-- solution -->
def number_to_string(num)
num.to_s
end

Convert a string to an array - Write a function to split a string and convert it into an array of words

<!-- problem -->
def string_to_array(string)
end

<!-- solution -->
def string_to_array(string)
  string.split
end

Sum Arrays - Write a function that takes an array of numbers and returns the sum of the numbers. The numbers can be negative or non-integer. If the array does not contain any numbers then you should return 0.

<!-- problem -->
def sum(numbers)
end

<!-- solution -->
def sum(numbers)
numbers.sum
end

Araay plus array - I'm new to coding and now I want to get the sum of two arrays...actually the sum of all their elements. I'll appreciate for your help.

<!-- problem -->
def array_plus_array(arr1, arr2)
  arr1 + arr2.
end

<!-- solution -->
def array_plus_array(arr1, arr2)
  arr1.sum + arr2.sum
end

<!-- different solution -->
def array_plus_array(arr1, arr2)
  (arr1 + arr2).reduce(:+)
end

<!-- 7/30/21 -->
MakeUpperCase - Write a function which converts the input string to uppercase.

<!-- problem -->
def make_upper_case(str)
end

<!-- solution -->
def make_upper_case(str)
  str.upcase
end

<!-- 7/31/21 -->
You only need one - Beginner - You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

Array can contain numbers or strings. X can be either.

Return true if the array contains the value, false if not.

<!-- problem -->
def check(arr,element)
end

<!-- solution -->
def check(arr,element)
  arr.include?(element) ? true : false
end

Remove exclamation marks - Write function RemoveExclamationMarks which removes all exclamation marks from a given string.

<!-- problem -->
def remove_exclamation_marks(s)
end

<!-- solution -->
def remove_exclamation_marks(s)
  s.delete("!")
end

Function 3 - multiplying two numbers - Implement a function which multiplies two numbers. (no starting code given)

<!-- solution -->
def multiply (a,b)
  a * b
  end

  Grasshopper - Messi Goals - Use variables to find the sum of the goals Messi scored in 3 competitions

  <!-- problem -->
  la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5

puts total_goals

<!-- solution -->
la_liga_goals = 43
champions_league_goals = 10
copa_del_rey_goals = 5
total_goals = la_liga_goals + champions_league_goals + copa_del_rey_goals

puts total_goals