package main

import "fmt"

func main() {
	const limit = 4000000
	solution := 0

	a, b := 1, 2
	for b <= limit {
		if b%2 == 0 {
			solution += b
		}
		a, b = b, a+b
	}

	fmt.Println("Solution: ", solution)
}
