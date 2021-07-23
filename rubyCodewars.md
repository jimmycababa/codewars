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