def is_palindrome(number):
    string_num = str(number)

    if len(string_num) <= 1:
        return True

    if string_num[0] is not string_num[-1]:
        return False

    return is_palindrome(string_num[1:-1])

####################################################################################################

largest_palindrome = 0

for first_num in range(100, 1000):
    for second_num in range(100, 1000):
        product = first_num * second_num
        if is_palindrome(product) and product > largest_palindrome:
            largest_palindrome = product

print largest_palindrome
