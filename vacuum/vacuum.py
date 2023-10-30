
# Today's Byte

# This question is asked by Amazon. Given a string representing the sequence of moves a robot vacuum makes, return whether or not it will return to its original position. The string will only contain L, R, U, and D characters, representing left, right, up, and down respectively.

# Ex: Given the following strings...

# "LR", return true
# "URURD", return false
# "RUULLDRD", return true

#create array: [0,0] where arr[0] equals y axis, arr[1] equals x axis
# add 1 for up and right movements, minus 1 for down and left moves

def vacuum (input):
    arr = [0,0]
    inputArr = list(input)

    for i in inputArr:
        if i == "L":
            arr[1] -= 1
        elif i == "R":
            arr[1] += 1
        elif i == "D":
            arr[0] -= 1
        elif i == "U":
            arr[0] += 1
        else:
            return
    
    if arr[0] == 0 and arr[1] == 0:
        return True
    else:
        return False

print(vacuum("LR"), 'true')
print(vacuum("URURD"), 'false')
print(vacuum("RUULLDRD"), 'true')