# Find the odd int - 

# problem
def find_it(seq)
  end

# solution
def find_it(seq)
    seq.reduce do |a,b| a ^ b
      end
  end