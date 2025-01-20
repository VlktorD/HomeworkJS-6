let numbers = [1, 2, 3, 4, 5];
let button = document.getElementById('printButton');
let list = document.getElementById('numberList');
let sumDiv = document.getElementById('sum');
let equationDiv = document.getElementById('equation');

button.addEventListener('click', function () {
    list.innerHTML = '';
    sumDiv.textContent = '';
    equationDiv.textContent = '';
    let sum = 0;
    let equation = '';

    for (let i = 0; i < numbers.length; i++) {
        let item = document.createElement('li');
        item.textContent = numbers[i];
        list.appendChild(item);
        sum += numbers[i];
        equation += numbers[i] + (i < numbers.length - 1 ? ' + ' : '');
    }

    equation += ' = ' + sum;
    sumDiv.textContent = 'Sum: ' + sum;
    equationDiv.textContent = 'Equation: ' + equation;
});
