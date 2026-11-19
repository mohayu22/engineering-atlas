function calculateTax(price, taxPercentage) {
    return price * (taxPercentage / 100);
}

console.log(calculateTax(1000, 15));
