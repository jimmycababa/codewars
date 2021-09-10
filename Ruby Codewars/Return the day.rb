# Return the day - Complete the function which returns the weekday according to the input number:

# 1 returns "Sunday"
# 2 returns "Monday"
# 3 returns "Tuesday"
# 4 returns "Wednesday"
# 5 returns "Thursday"
# 6 returns "Friday"
# 7 returns "Saturday"
# Otherwise returns "Wrong, please enter a number between 1 and 7"

# problem
def what_day?(n)
end

# solution
def what_day?(n)
    if n == 1
      "Sunday"
      elsif n == 2
      "Monday"
      elsif n == 3
      "Tuesday"
      elsif n== 4
      "Wednesday"
      elsif n == 5
      "Thursday"
      elsif n == 6
      "Friday"
      elsif n == 7
      "Saturday"
      else
      "Wrong, please enter a number between 1 and 7"
      end
  end

#   alternate solution
def what_day?(n)
    case n
     when 1 then "Sunday"
     when 2 then "Monday"
     when 3 then "Tuesday"
     when 4 then "Wednesday"
     when 5 then "Thursday"
     when 6 then "Friday"
     when 7 then "Saturday"
     else "Wrong, please enter a number between 1 and 7"
     end
   end
