let arr1 = []
for(let i = 10; i <= 20; i++) {
arr1.push(i)
}
let outArr1 = document.getElementById('outArr1');
outArr1.innerHTML = arr1;
//======================================================================
let arr2 = []
for(let i = 10; i <= 20; i++) {
    arr2.push(i**2)
}
let outArr2 = document.getElementById('outArr2');
outArr2.innerHTML = arr2;
//======================================================================
let arr3 = []
for(let i = 0; i <= 10; i++) {
    arr3.push(`${i} * 7 = ${i*7}`)
}
let outArr3 = document.getElementById('outArr3');
for (let i = 0; i < arr3.length; i++) {
    let span = document.createElement("span");
    span.textContent = arr3[i];
    outArr3.appendChild(span);
}
//======================================================================
let num = 0
for(let i = 1; i <= 15; i++) {
    num += i
}
let outArr4 = document.getElementById('outArr4');
outArr4.innerHTML = num;
//======================================================================
let num2 = 1
for(let i = 15; i <= 35; i++) {
    num2 *= i
}
let outArr5 = document.getElementById('outArr5');
outArr5.innerHTML = num2;
//======================================================================
let amount = 0;
let summ = 0;
for (let i = 1; i <= 500; i++) {
    summ += i;
    amount++;
}
const num3 = summ / amount;
let outArr6 = document.getElementById('outArr6');
outArr6.innerHTML = num3;
//======================================================================
let num4 = 0;
for(let i = 30; i <= 80; i++) {
    if (i % 2 === 0) {
        num4 += i
    }
}
let outArr7 = document.getElementById('outArr7');
outArr7.innerHTML = num4;
//======================================================================
let arr4 = [];
for(let i = 100; i <= 200; i++) {
    if (i % 3 === 0) {
        arr4.push(i)
    }
}
let outArr8 = document.getElementById('outArr8');
outArr8.innerHTML = arr4;
//======================================================================
let num5 = prompt("Введіть натуральне число для 9 пункту:");

num5 = parseInt(num5);
let outArr9 = document.getElementById("outArr9");
let outArr10 = document.getElementById("outArr10");
let outArr11 = document.getElementById("outArr11");
if (num5 > 0 && Number.isInteger(num5)) {
    let result = "Дільники числа " + num5 + ": ";
    let result2 = "Парні дільники числа " + num5 + ": ";
    let sumEvenDivisors = 0;

    for (let i = 1; i <= num5; i++) {
        if (num5 % i === 0) {
            result += i + " ";
            if (i % 2 === 0) {
                result2 += i + " ";
                sumEvenDivisors += i;
            }
        }
    }

    outArr9.textContent = result;
    outArr10.textContent = result2;
    outArr11.textContent = "Сума парних дільників числа " + num5 + ": " + sumEvenDivisors;

} else {
    outArr9.textContent = 'Ви ввели не коректне натуральне число';
    alert("Введіть коректне натуральне число.");
}
//======================================================================
let arr5 = []
let outArr12 = document.getElementById("outArr12");
let ulElement = document.createElement("ul");
for(let i = 1; i <= 10; i++) {
    for(let j = 1; j <= 10; j++) {
        arr5.push(`${i} * ${j} = ${i*j}`)
    }
}
arr5.forEach((item) => {
    let liElement = document.createElement("li");
    liElement.textContent = item;
    ulElement.appendChild(liElement);
});
outArr12.appendChild(ulElement);