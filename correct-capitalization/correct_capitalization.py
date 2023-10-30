
# Today's Byte

# This question is asked by Google. Given a string, return whether or not it uses capitalization correctly. A string correctly uses capitalization if all letters are capitalized, no letters are capitalized, or only the first letter is capitalized.

# Ex: Given the following strings...

# "USA", return true
# "Calvin", return true
# "compUter", return false
# "coding", return true



def check_cap(input):
    arr = list(input)
    arr2 = []
    for i in arr:
        if (ord(i) >=65 and ord(i) <=90):
            arr2.append(True)
        else:
            arr2.append(False)
    set_arr = list(set(arr2))
    if len(set_arr) == 1:
        return True
    else:
        arr3 = arr2[1::]
        if arr3[0] == False:
            set_arr2 = list(set(arr3))
            if len(set_arr2) == 1:
                return True
            else: 
                return False
        else:
            return False



print(check_cap('USA'))
print(check_cap('Calvin'))
print(check_cap('coding'))
print(check_cap('cALVIN'))
print(check_cap('compUter'))