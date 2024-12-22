package main

import "fmt"

const limit int = 100

func sumOfSquares(n int) int {
	return (n * (n + 1) * (2*n + 1)) / 6 // Formula: n(n+1)(2n+1)/6
}

func squareOfSums(n int) int {
	sum := (n * (n + 1)) / 2 // Formula: n(n+1)/2
	return sum * sum
}

func main() {
	difference := squareOfSums(limit) - sumOfSquares(limit)
	fmt.Println("Solution:", difference)
}
