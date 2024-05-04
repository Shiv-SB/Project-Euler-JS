Array.prototype.trim = function(lowerBound, upperBound) {
    const greaterThan = (x, lim) => x > lim;
    const lessThan = (x, lim) => x < lim;
    let newArr = this.filter(function(entry) {
        if(typeof lowerBound === "number" && typeof upperBound === "number") {
            return lessThan(entry, upperBound) && greaterThan(entry, lowerBound);
        }
        if(lowerBound && !upperBound) {
            return greatherThan(entry, lowerBound);
        }
        if(!lowerBound && upperBound) {
            return lessThan(entry, upperBound);
        }
    });
    return newArr;
};

Array.prototype.trim = length => {
    return [...Array(length + 1).keys()].splice(1);
};

Array.prototype.sum = function() {
    return this.reduce((a, b) => a + b, 0);
};

Array.prototype.product = function() {
    return this.reduce((a, b)=> a * b, 1);
};

Array.prototype.max = function () {
    return Math.max.apply(this, [...this]);
}

Array.prototype.min = function () {
    return Math.min.apply(this, [...this]);
}

Array.prototype.eqaulity = function (arr) {
    if(!Array.isArray(arr)) return false;
    return (
        this.length === arr.length &&
        this.every((val, i) => val === arr[i])
    );
}

Array.prototype.indexesOf = function(val) {
    return this.reduce((r, n, i) => {
        n === val && r.push(i);
        return r;
    }, []);
}

Array.prototype.neighbours = function(location, width) {
    return this.slice(location - width, location + width + 1);
}

let foo = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(foo.neighbours(6, 2));

