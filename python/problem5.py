HIGHEST_DIVISOR = 20

possible_divisors = list(reversed(range(2, HIGHEST_DIVISOR)))

def is_evenly_divisible(number):
    for divisor in possible_divisors:
        if number % divisor != 0:
            return False

    return True

num = HIGHEST_DIVISOR

while True:
    if is_evenly_divisible(num):
        break

    num += HIGHEST_DIVISOR

print num
