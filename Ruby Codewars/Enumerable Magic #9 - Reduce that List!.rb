# Enumerable Magic #9 - Reduce that List! - Create a method reduce that accepts a list and a block, and returns an aggregate object for that list. See the tests for examples

# problem
def reduce list, &block
  end

# solution
def reduce list, &block
    list.reduce(&block)
  end