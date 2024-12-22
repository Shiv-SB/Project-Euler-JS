package main

import (
	"fmt"
	"slices"
	"strconv"
)

func flip(input string) string {
	// Get Unicode code points.
	n := 0
	rune := make([]rune, len(input))
	for _, r := range input {
		rune[n] = r
		n++
	}
	rune = rune[0:n]
	// Reverse
	for i := 0; i < n/2; i++ {
		rune[i], rune[n-1-i] = rune[n-1-i], rune[i]
	}
	// Convert back to UTF-8.
	return string(rune)
}

func isPalindrome(x string) bool {
	return x == flip(x)
}

func main() {
	var products []int
	var palindromes []int
	for i := 100; i <= 999; i++ {
		for j := 100; j <= 999; j++ {
			products = append(products, i*j)
		}
	}

	for i := range products {
		if isPalindrome(strconv.Itoa(products[i])) {
			palindromes = append(palindromes, products[i])
			fmt.Println(products[i])
		}
	}

	slices.Sort(palindromes)

	//fmt.Println("Sorted:", palindromes)
	fmt.Println("Solution:", palindromes[len(palindromes) -1])

}
