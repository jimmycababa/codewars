

# L1: Bartender, drinks! - Complete the function that receives as input a string, and produces outputs according to the following table:

# Input	Output
# "Jabroni"	"Patron Tequila"
# "School Counselor"	"Anything with Alcohol"
# "Programmer"	"Hipster Craft Beer"
# "Bike Gang Member"	"Moonshine"
# "Politician"	"Your tax dollars"
# "Rapper"	"Cristal"
# anything else	"Beer"
# Note: anything else is the default case: if the input to the function is not any of the values in the table, then the return value should be "Beer".

# Make sure you cover the cases where certain words do not show up with correct capitalization. For example, the input "pOLitiCIaN" should still return "Your tax dollars".


# problem
def get_drink_by_profession(param)
    
end

# solution
def get_drink_by_profession(param)
    case param.downcase
    when "jabroni" then "Patron Tequila"
      when "school counselor" then "Anything with Alcohol"
        when "programmer" then "Hipster Craft Beer"
          when "bike gang member" then "Moonshine"
            when "politician" then "Your tax dollars"
              when "rapper" then "Cristal"
                else "Beer"
                end
end