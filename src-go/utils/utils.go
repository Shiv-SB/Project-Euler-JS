package utils

// IsDivisibleBy checks if x is divisible by divisor
func IsDivisibleBy(x int, divisor int) bool {
    if divisor == 0 {
        return false
    }
    return x%divisor == 0
}
