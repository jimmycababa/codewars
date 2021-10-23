# Enumerable Magic #11 - Find the Maximum by Value! - Create a method max_by that accepts a list and a block, runs the block for each item in the list, and returns the item with the highest block return value.

# problem
def max_by list, &block
  end

# solution
def max_by list, &block
    list.max_by(&block)
  end