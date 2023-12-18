# This question is asked by Apple. Given two binary strings (strings containing only 1s and 0s) return their sum (also as a binary string).
# Note: neither binary string will contain leading 0s unless the string itself is 0

# Ex: Given the following binary strings...

# "100" + "1", return "101"
# "11" + "1", return "100"
# "1" + "0", return  "1"

def add_binary(x, y) :
    return bin(int(x, 2) + int(y, 2))


print(add_binary('100', '1'))
print(add_binary('11', '1'))
print(add_binary('1', '0'))
