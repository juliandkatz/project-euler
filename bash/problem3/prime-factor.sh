#! /bin/zsh

isPrime() {
  COUNTER=0

  sqrt="$(echo "$(($1 ** 0.5))" | cut -d '.' -f 1)"
  sqrt="$(($sqrt + 1))"

  until [ $COUNTER -eq $sqrt ]; do
    COUNTER="$(($COUNTER+1))"
    echo $COUNTER
  done
}

isPrime 16

