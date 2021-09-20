# Enumerable Magic #30 - Split that Array! - Create a method partition that accepts a list and a method/block. It should return two arrays: the first, with all the elements for which the given block returned true, and the second for the remaining elements.

# Here's a simple Ruby example:

# animals = ["cat", "dog", "duck", "cow", "donkey"]
# partition(animals){|animal| animal.size == 3}
#     #=> [["cat", "dog", "cow"], ["duck", "donkey"]]

# problem
def partition list, &block
  end

# solution
def partition list, &block
    list.partition(&block)
  end