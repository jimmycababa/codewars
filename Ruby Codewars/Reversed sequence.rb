# Reversed sequence - Build a function that returns an array of integers from n to 1 where n>0.

# Example : n=5 --> [5,4,3,2,1]

# problem
def reverse_seq(n)
  end

# solution
def reverse_seq(n)
    [*1..n].reverse
  end

# alternate solutions
def reverse_seq(n)
    n.downto(1).to_a
  end

  def reverse_seq(n)
    (1..n).sort.reverse
 end