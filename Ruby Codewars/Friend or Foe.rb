# Friend or Foe? - Make a program that filters a list of strings and returns a list with only your friends name in it.

# If a name has exactly 4 letters in it, you can be sure that it has to be a friend of yours! Otherwise, you can be sure he's not...

# Ex: Input = ["Ryan", "Kieran", "Jason", "Yous"], Output = ["Ryan", "Yous"]

# problem
def friend(friends)
  end

# solution
def friend(friends)
    friends.select { |name| name.length == 4 }
  end

# alternate answer
def friend(friends)
    friends.reject{|f|f.length != 4}
  end
