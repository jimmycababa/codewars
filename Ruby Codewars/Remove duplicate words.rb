# Remove duplicate words - Your task is to remove all duplicate words from a string, leaving only single (first) words entries.

# Example:

# Input:

# 'alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'

# Output:

# 'alpha beta gamma delta'

# problem
def remove_duplicate_words(s)
   
  end

#   solution
def remove_duplicate_words(s)
    s.split.uniq.join(' ')
  end