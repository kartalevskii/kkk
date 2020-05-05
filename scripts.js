
//EX1
function Creat() {
    let a = prompt('Первое число EX1'),
        b = prompt('Второе число EX1'),
        c = prompt('Третье число EX1'),
        d = (a - b) / c;
    console.log(d);
}
Creat()

//EX2
function math() {
    let a = prompt('Введите число EX2');
    let b = a * a;
    let l = b * a;
    console.log(b + ' и ' + l);
}
math()

//EX3
function minmax() {
    let a = prompt('Введите число EX3');
    let b = prompt('Введите второе число EX3');
    if (a < b) {
        console.log(a + ' < ' + b);
    } else {
        console.log(a + ' > ' + b);
    }
}
minmax()

 //EX4
function diap() {
    let a = prompt('Ведите числа в диапозоне от... EX4');
    let b = prompt('  и до EX4');
    let array = [];
    for (a; a <= b; a++) {
        array.push(+a)
    }
    console.log(array);
}
diap()
     // В 4 задании вторая функция нужна для вывода полученного массива. К сожалению, я не понял, в чем её необходимость, если я и так могу его вывести.

//EX5
function isEven() {
    let a = 6;
    if (a % 2 == 0) {
        console.log(true);
    } else {
        console.log(false);
    }
}
isEven();

//EX6
function Arrayy() {
    let array = [9, 46, 45, 13, 25, 87, 8, 100, 76, 1];
    array2 = [];
    for (i = 0; i <= array.length; i++) {
        if ((array[i]) % 2 == 0) {
            array2.push(array[i]);
        }
    }
    console.log(array2);
}
Arrayy();

//EX7
function Egypt(NumberRows) {
    let arr = new Array();
    for (let i = 1; i <= NumberRows; i++) {
        for (let j = 1; j <= i; j++) {
            arr.push(j);
            document.write(j);
        }
        document.write('<br\/>');
    }
}
Egypt(20);
    //немного не то

//EX8
function fib(n) {
    let a = 1;
    let b = 1;
    let arr = [];
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
        arr.push(b);
        console.log(arr); //выглядит приятнее когда в консоле b
    }
}
fib(16)
    //все отробатывает хорошо, но не 1, а n-2 раз

//EX9
let num = prompt('Введите число для EX9');

function Nine(a) {
    let sum1 = 0;
    for (let i = 0; i < a.length; i++) {
        sum1 += +a[i];
    }
    if (sum1 > 9) {
        Nine(sum1 + '');
    } else {
        console.log(sum1);
    }
}
Nine(num);

//EX10
let arr = [1, 2, 3, 4, 5, 6];
elem(arr);

function elem(arr) {
    console.log(arr.shift());
    if (arr != 0) {
        elem(arr);
    }
}

