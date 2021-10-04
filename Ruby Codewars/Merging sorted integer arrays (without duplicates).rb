# Merging sorted integer arrays (without duplicates) - Write a function that merges two sorted arrays into a single one. The arrays only contain integers. Also, the final outcome must be sorted and not have any duplicate.

# problem
def merge_arrays(a, b)
  end

# solution
def merge_arrays(a, b)
    a.concat(b)
    a.uniq.sort
  end

# two alternate solutions
def merge_arrays(a, b)
    (a+b).uniq.sort
  end

def merge_arrays(a, b)
    (a | b).sort
  end