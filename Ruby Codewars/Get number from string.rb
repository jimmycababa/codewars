# <!-- 8/21/2021 -->
# Get number from string - Write a function which removes from string all non-digit characters and parse the remaining to number. E.g: "hell5o wor6ld" -> 56

# <!-- problem -->
def get_number_from_string(s)
end

# <!-- solution -->
def get_number_from_string(s)
s.gsub!(/[a-z\W]/, '')
  return s.to_i
end

# <!-- best practices answer -->
def get_number_from_string(s)
  s.scan(/\d+/).join.to_i
end