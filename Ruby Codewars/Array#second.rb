# Array#second - Define a new instance method on the Array class called second, which returns the second item in an array (similar to the way .first and .last work in Ruby).

# If there is no element with index 1 in the array, return nil.

# problem
class Array
    end

# solution
class Array
    def second
      self.length <= 1 ? nil : self[1]
      end
    end

# better answer
class Array
    def second
      return self[1]
    end
  end