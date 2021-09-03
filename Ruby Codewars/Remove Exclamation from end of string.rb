# Exclamation marks series 1: Remove a exclamation mark from the end of string - Remove a exclamation mark from the end of string. For a beginner kata, you can assume that the input data is always a string, no need to verify it.

# Examples
# remove("Hi!") === "Hi"
# remove("Hi!!!") === "Hi!!"
# remove("!Hi") === "!Hi"
# remove("!Hi!") === "!Hi"
# remove("Hi! Hi!") === "Hi! Hi"
# remove("Hi") === "Hi"

# Problem
def remove(s)
end

# solution
def remove(s)
    s.delete_suffix('!')
    end

    # better solution
    def remove(s)
        s.chomp('!')
        end