#! /bin/bash

isDivisibleBy () {
  local remainder="$(($2 % $1))"
  if [ $remainder -eq 0 ]
  then
    true
  else
    false
  fi
}

isDivisibleBy 3 6

COUNTER=0
SUM=0
while [ $COUNTER -lt 999 ]; do
  let COUNTER=COUNTER+1

  if isDivisibleBy 3 $COUNTER || isDivisibleBy 5 $COUNTER
  then
    # echo $COUNTER
    SUM="$(($SUM + $COUNTER))"
  fi
done

echo $SUM
