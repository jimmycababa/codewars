# Calculate BMI - Write function bmi that calculates body mass index (bmi = weight / height2).

# if bmi <= 18.5 return "Underweight"

# if bmi <= 25.0 return "Normal"
    
# if bmi <= 30.0 return "Overweight"
    
# if bmi > 30 return "Obese"

# problem
def bmi(weight, height)
  end

# solution
def bmi(weight, height)
    bmi = weight/height**2
    if bmi <= 18.5
      return "Underweight"
    elsif bmi <= 25.0
      return "Normal"
    elsif bmi <= 30.0
      return "Overweight"
    elsif bmi > 30.0
    return "Obese"
      end
  end

# alternate answer
def bmi(weight, height)
    bmi = weight / (height ** 2)
    return "Underweight" if bmi <= 18.5 
    return "Normal" if bmi <= 25.0 
    return "Overweight" if bmi <= 30.0 
    return "Obese"  if bmi > 30 
  end