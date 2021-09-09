# Beginner Series #4 Cockroach - The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

# problem
def cockroach_speed(s)
  end

# solution
def cockroach_speed(s)
    c = 27.7778
    (s * c).floor()
  end

# using km_hr as the variable
def cockroach_speed(km_hr)
    (km_hr * 27.7778).floor
  end