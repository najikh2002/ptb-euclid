// Algoritma Euclid untuk menghitung GCD (Greatest Common Divisor)
function gcd(a, b) {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
}

// Fungsi untuk menangani input dan output
function calculateGCD() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
        return;
    }

    const result = gcd(num1, num2);
    document.getElementById('result').textContent = `GCD of ${num1} and ${num2} is: ${result}`;
}
