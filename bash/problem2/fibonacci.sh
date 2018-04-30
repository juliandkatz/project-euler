#! /bin/bash

isEven() {
  local remainder="$(($1 % 2))"

  if [ $remainder -eq 0 ]
  then
    true
  else
    false
  fi
}

fib1=1
fib2=2
temp=0
sum=0

lessThan=4000000

while [ $fib1 -lt $lessThan ]; do
  if isEven $fib1
  then
    sum="$(($sum + $fib1))"
  fi

  temp="$(($fib1 + $fib2))"
  fib1=$fib2
  fib2=$temp
done

echo $sum
