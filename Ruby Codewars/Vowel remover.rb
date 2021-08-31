# Vowel remover - Create a function called shortcut to remove all the lowercase vowels in a given string.

# problem
def shortcut(s)
    
  end

# solution
def shortcut(s)
    s.delete('aeiou')
  end

#   regex
def shortcut(s)
    s.gsub(/[aeiou]/, '')
  end