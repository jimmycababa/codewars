# Convert Hash To An Array - Convert a hash into an array. Nothing more, Nothing less.

# {name: 'Jeremy', age: 24, role: 'Software Engineer'}
# should be converted into

# [["name", "Jeremy"], ["age", 24], ["role", "Software Engineer"]]

# problem
def convert_hash_to_array(hash)
    end

# solution
def convert_hash_to_array(hash)
    hash.map { |k, v| [k.to_s, v] }.to_a
    end

# alternate solution
def convert_hash_to_array(hash)
    hash.transform_keys(&:to_s).to_a
  end