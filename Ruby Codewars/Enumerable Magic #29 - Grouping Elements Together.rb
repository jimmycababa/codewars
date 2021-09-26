# Enumerable Magic #29 - Grouping Elements Together - Create a method group_by that accepts a list and a block. It should return a hash where the keys are the block return values, and the hash values are arrays of the corresponding items grouped together.

# problem
def group_by list, &block

  end

# solution
def group_by list, &block
    list.group_by(&block)
  end