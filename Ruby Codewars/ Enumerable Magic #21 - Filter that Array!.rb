# Enumerable Magic #21 - Filter that Array! - Create a method select that accepts a list and a block, and returns a new array of elements for which the given block returns true.

# problem
def select list, &block
  end

# solution
def select list, &block
    list.select(&block)
  end