# Leonardo Dicaprio and Oscars - You have to write a function that describe Leo:

# def leo(oscar):
#     pass
#   if oscar was (integer) 88, you have to return "Leo finally won the oscar! Leo is happy".
#   if oscar was 86, you have to return "Not even for Wolf of wallstreet?!"
#   if it was not 88 or 86 (and below 88) you should return "When will you give Leo an Oscar?"
#   if it was over 88 you should return "Leo got one already!"

# problem
def leo(oscar)
  end

# solution
def leo(oscar)
    if oscar.to_i == 88
      return "Leo finally won the oscar! Leo is happy"
    elsif oscar.to_i == 86
      return  "Not even for Wolf of wallstreet?!"
    elsif oscar.to_i != 88 and oscar.to_i != 86 and oscar.to_i < 88
      return "When will you give Leo an Oscar?"
    elsif oscar.to_i > 88
      return "Leo got one already!"
      end
  end

# better solution
def leo(oscar)
    return  case oscar
            when 88 then "Leo finally won the oscar! Leo is happy"
            when 86 then "Not even for Wolf of wallstreet?!"
            else oscar > 88 ? "Leo got one already!" : "When will you give Leo an Oscar?"
            end
  end