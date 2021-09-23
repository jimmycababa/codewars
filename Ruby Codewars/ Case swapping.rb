# Case swapping - Given a string, swap the case for each of the letters.

# e.g. CodEwArs --> cODeWaRS

# problem
def swap(string)
  end

# solution
def swap(string)
    string.swapcase
  end

# alternate solution
def swap(string)
    string.chars.map {|c| c.upcase == c ? c.downcase : c.upcase}.join
  end