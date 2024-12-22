package main

import "fmt"

func getPrimeFactors(n int) []int {
	var factors []int
	var divisor int = 2
	for n >= 2 {
		if (n % divisor == 0) {
			factors = append(factors, divisor)
			n = n / divisor
		} else {
			divisor++
		}
	}
	return factors
}

func main() {
	primeNo := 600851475143

	primeFactors := getPrimeFactors(primeNo)
	solution := primeFactors[len(primeFactors) - 1]
	fmt.Println("Solution:", solution)
}