def isPalidrome(value):
    revValue = int(str(value)[::-1])
    return revValue == value


def largerOrSmaller(original, new):
    if original >= new:
        return original
    else:
        return new


###########################################################################

largestPalidrome = 0

for valueone in range(100, 1000):
    for valuetwo in range(100, 1000):
        product = valueone * valuetwo
        if isPalidrome(product):
            largestPalidrome = largerOrSmaller(largestPalidrome, product)

print (largestPalidrome)
