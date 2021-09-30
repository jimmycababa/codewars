# Push a hash/an object into array - You are trying to put a hash in ruby or an object in javascript or java into an array, but it always returns error, solve it and keep it as simple as possible!

# problem
items = Array.new
items.push {:a => "b", :c => "d"}

# solution
items = Array.new
items.push(:a => "b", :c => "d")

# alternate answer
items = Array.new
items << {:a => "b", :c => "d"}