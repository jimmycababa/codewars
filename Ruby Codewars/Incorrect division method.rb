# Incorrect division method - This method, which is supposed to return the result of dividing its first argument by its second, isn't always returning correct values. Fix it.

# problem
def divide_numbers x, y
    x / y
end

# solution
def divide_numbers(x, y)
    x.to_f / y
   end