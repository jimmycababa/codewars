# Ensure question - Given a string, write a function that returns the string with a question mark ("?") appends to the end, unless the original string ends with a question mark, in which case, returns the original string.

# problem
def ensure_question(s)
   end

#    solution
def ensure_question(s)
    s.include?("?") ? s : s + "?"
   end

# alternate answer
def ensure_question(s)
    s.chomp('?') + '?'
  end