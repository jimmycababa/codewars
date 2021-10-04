# Are You Playing Banjo? - Create a function which answers the question "Are you playing banjo?".
# If your name starts with the letter "R" or lower case "r", you are playing banjo!

#     The function takes a name as its only argument, and returns one of the following strings:
    
#     name + " plays banjo" 
#     name + " does not play banjo"
#     Names given are always valid strings.

# problem
def are_you_playing_banjo(name)
   end

# solution
def are_you_playing_banjo(name)
    name.start_with?("R", "r") ? name + " " + "plays banjo" : name + " " + "does not play banjo"
   end

# better solution
def are_you_playing_banjo(name)
    name[0].downcase == "r" ? "#{name} plays banjo" : "#{name} does not play banjo"
  end