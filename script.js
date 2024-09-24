// Algoritma Euclid untuk menghitung GCD dan menampilkan langkah-langkahnya
function gcdWithSteps(a, b) {
    let steps = [];

    while (b !== 0) {
        let remainder = a % b;
        steps.push(`${a} = ${b} * ${Math.floor(a / b)} + ${remainder}`);
        a = b;
        b = remainder;
    }

    steps.push(`gcd(${a}, 0) -> GCD is ${a}`);
    return { gcd: a, steps };
}

// Fungsi untuk menangani input dan output
function calculateGCD() {
    const num1 = parseInt(document.getElementById('num1').value);
    const num2 = parseInt(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').textContent = "Please enter valid numbers!";
        document.getElementById('steps').innerHTML = '';
        return;
    }

    const { gcd, steps } = gcdWithSteps(num1, num2);

    // Tampilkan hasil GCD
    document.getElementById('result').textContent = `GCD of ${num1} and ${num2} is: ${gcd}`;

    // Tampilkan langkah-langkah
    const stepsList = document.getElementById('steps');
    stepsList.innerHTML = ''; // Hapus langkah sebelumnya
    steps.forEach(step => {
        const li = document.createElement('li');
        li.textContent = step;
        stepsList.appendChild(li);
    });
}
