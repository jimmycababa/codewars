# Grasshopper - Combine strings - Create a function named (combine_names) that accepts two parameters (first and last name). The function should return the full name.

# problem
def combine_names (first, last)
    end

# solution
def combine_names (first, last)
    first + " " + last
    end

# better solution
def combine_names(*names)
    names.join(" ")
  end
