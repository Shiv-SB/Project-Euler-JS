package main

import (
	"fmt"
)

func generatePrimes(lim int) []int {
	var sieve []bool = make([]bool, lim+1)
	for i := range sieve {
		sieve[i] = true
	}

	var primes []int

	for i := 2; i <= lim; i++ {
		if sieve[i] {
			primes = append(primes, i)
			for j := i * i; j <= lim; j += i {
				sieve[j] = false
			}
		}
	}
	return primes
}

func reduceMultiply(slice []int) int {
	var output int = 1
	for i := range slice {
		output = slice[i] * output

	}
	return output
}

func main() {
	var factors []int = generatePrimes(20)
	fmt.Println("Solution:", reduceMultiply(factors)*3*8)
}
