# Enumerable Magic #8 - Find the Index of the Matching Item - reate a method find_index that accepts a list and a block, and returns index of the first item for which the block returns true. If no item in the list matches, return nil.

# problem
def find_index list, &block
  end

# solution
def find_index list, &block
    list.find_index(&block)
  end