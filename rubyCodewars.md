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