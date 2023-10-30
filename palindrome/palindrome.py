
# Today's Byte

# This question is asked by Facebook. Given a string, return whether or not it forms a palindrome ignoring case and non-alphabetical characters.
# Note: a palindrome is a sequence of characters that reads the same forwards and backwards.

# Ex: Given the following strings...

# "level", return true
# "algorithm", return false
# "A man, a plan, a canal: Panama.", return true

#convert input to lowercase
#remove punctuation and white space
#reverse copy of string
#if input == reverse string return True else return False

def palindrome (input):
    input2 = ''.join(e for e in input if e.isalnum()).lower()
    str2 = input2[::-1]

    if input2 == str2:
        return True
    else:
        return False
    


print(palindrome("level"), "true")
print(palindrome("algorithm"), "false")
print(palindrome("A man, a plan, a canal: Panama."), "true")