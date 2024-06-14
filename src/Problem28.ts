// Number Spiral Diagonals

/*

consider the matrix:

Consider n x n matrix where n = 3:

7 8 9
6 1 2
5 4 3

Lets label each element:

a b c
d e f
g h i

Therefore a = 7, b = 8, etc

Consider the corners a, c, g, i
There exists a general formula for these corners:
a = n^2 - n + 1
c = n^2
g = n^2 - 2n + 2
i = n^2 - 3n + 3

For n = 3, this covers both diagonals. If expanded to n = 4, computing the diagonals for n = 3 and n = 4 will give the sum for n = 4.
Hence by induction, for an n x n matrix, the sum of diagonals can be computed from the matricies n, n - 2, n - 4, n..., to n = 3.
Note that we can step over the matricies by 2 opposed to 1, as even sized matricies are not valid spirals.
*/


const limit = 1001;
let t = 1;
for (let n = 3; n <= limit; n+=2) {
    t+= 4 * Math.pow(n, 2) - (6 * n) + 6;
}

console.log("Solution:", t);