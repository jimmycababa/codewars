# Reverser - Impliment the reverse function, which takes in input n and reverses it. For instance, reverse(123) should return 321. You should do this without converting the inputted number into a string.

# problem
def reverser(number)
end

# solution
def reverser(number)
    number.to_s.reverse.to_i
end

# alternate solution
def reverser(number)
    number.digits.join.to_i
 end        