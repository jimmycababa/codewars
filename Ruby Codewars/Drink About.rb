# Drink about - Kids drink toddy.
# Teens drink coke.
# Young adults drink beer.
# Adults drink whisky.
# Make a function that receive age, and return what they drink.

# Rules:

# Children under 14 old.
# Teens under 18 old.
# Young under 21 old.
# Adults have 21 or more.



# problem
def people_with_age_drink(old)
    
  end

#   solution
def people_with_age_drink(old)
    if old <= 13
      return 'drink toddy'
      elsif old <= 17
      return 'drink coke'
      elsif old <= 20
      return 'drink beer'
      elsif old >= 21
      return 'drink whisky'
      end
  end

#   better solution
def people_with_age_drink(age)
    'drink ' + case age
      when 0..13 then 'toddy'
      when 14..17 then 'coke'
      when 18..20 then 'beer'
      else 'whisky'
    end
  end