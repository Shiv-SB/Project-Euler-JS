package main

import "fmt"

// 1-indexed nth prime number
func nthPrime(limit int) int {
	primes := []int{2}
	for i := 3; len(primes) < limit; i += 2 {
		var i_isPrime = true
		for j := 0; j < len(primes) && primes[j]*primes[j] <= i; j++ {
			if i%primes[j] == 0 {
				i_isPrime = false
			}
		}
		if i_isPrime {
			primes = append(primes, i)
		}
	}
	return primes[len(primes)-1]
}

func main() {
	fmt.Println("Solution:", nthPrime(10001))
}
