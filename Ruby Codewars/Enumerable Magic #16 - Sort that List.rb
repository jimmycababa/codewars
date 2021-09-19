# Enumerable Magic #16 - Sort that List - Create a method sort that accepts a list and a block. The block should define how sort compares two items on the list. It should return a new, sorted version of the list.

# problem
def sort list, &block
  end

# solution
def sort list, &block
    list.sort(&block)
  end