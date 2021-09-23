# Jaden Casing Strings - Your task is to convert strings to how they would be written by Jaden Smith. The strings are actual quotes from Jaden Smith, but they are not capitalized in the same way he originally typed them.

# Example:

# Not Jaden-Cased: "How can mirrors be real if our eyes aren't real"
# Jaden-Cased:     "How Can Mirrors Be Real If Our Eyes

# problem
class String
    def toJadenCase
    
    end
  end

# solution
class String
    def toJadenCase
      split(' ').map { |x| x.capitalize }.join(' ')
    end
  end

# alternate solution
class String
    def toJadenCase
      self.split.map(&:capitalize).join(" ")
    end
  end