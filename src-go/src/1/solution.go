package main

import "fmt"

func main() {
	const limit int = 1000
	var solution int

	for i := 3; i < limit; i++ {
		if i%3 == 0 || i%5 == 0 {
			solution += i
		}
	}

	fmt.Print("Solution: ", solution)
}
