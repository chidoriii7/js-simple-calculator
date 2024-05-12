// let tastieraNumeri = document.querySelector('.numbers') 

// tastieraNumeri.addEventListener('click', function() {
//     console.log('ho cliccato un bottone')
// })





let result = document.getElementById('result-bar');

let operatore = '';
let operando1 = '';
let risultatoFinale = '';

//         //
// NUMBERS //
//         //

let number0 = document.getElementById('number-0');
number0.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '0';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 0')
})
let number1 = document.getElementById('number-1');
number1.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }

    result.innerText = result.innerText + '1';
    // console.log('ho cliccato il numero 1')
})
let number2 = document.getElementById('number-2');
number2.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }

    result.innerText = result.innerText + '2';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 2')
})
let number3 = document.getElementById('number-3');
number3.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }

    result.innerText = result.innerText + '3';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 3')
})
let number4 = document.getElementById('number-4');
number4.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '4';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 4')
})
let number5 = document.getElementById('number-5');
number5.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '5';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 5')
})
let number6 = document.getElementById('number-6');
number6.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '6';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 6')
})
let number7 = document.getElementById('number-7');
number7.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '7';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 7')
})
let number8 = document.getElementById('number-8');
number8.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '8';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 8')
})
let number9 = document.getElementById('number-9');
number9.addEventListener('click', function(){
    if (risultatoFinale !== '') {
        result.innerText = '';
    }
    result.innerText = result.innerText + '9';
    risultatoFinale = '';
    // console.log('ho cliccato il numero 9')
})

//           //
// OPERATORS //
//           //

let equal = document.getElementById('equal');
equal.addEventListener('click', function(){
    result.innerText = performOP(operatore, operando1, result.innerText);
    risultatoFinale = result.innerText;
    // console.log('rF', risultatoFinale); 
    // console.log('op1', operando1);
})

let reset = document.getElementById('reset');
reset.addEventListener('click', function(){
    result.innerText = '';
    // console.log('ho cliccato C');
})

let plus = document.getElementById('plus');
plus.addEventListener('click', function(){
    operatore = '+';
    operando1 = result.innerText;
    result.innerText = '';
    // console.log('ho cliccato +');
})

let minus = document.getElementById('minus');
minus.addEventListener('click', function(){
    operatore = '-';
    operando1 = result.innerText;
    result.innerText = '';
    // console.log('ho cliccato -');
})

let times = document.getElementById('times');
times.addEventListener('click', function(){
    operatore = '*';
    operando1 = result.innerText;
    result.innerText = '';
    // console.log('ho cliccato x');
})

let divided = document.getElementById('divided');
divided.addEventListener('click', function(){
    operatore = '/';
    operando1 = result.innerText;
    result.innerText = '';
    // console.log('ho cliccato il diviso');
})

function performOP(operatore, num1, num2) {
    num1 = Number(num1)
    num2 = Number(num2)
    switch (operatore) {
        case '+':
            return num1 + num2; 
        case '-':
            return num1 - num2;
        case '*': 
            return num1 * num2;
        case '/':
            if (num2 === 0) {
            return 'NON PUOI DIVIDERE PER 0';
            } 
            return num1 / num2;
    } 
}