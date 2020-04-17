//EX1

 /* for(let i = 1; i <= 50; i++){
    console.log(i);
}
for(let h = 35; h >= 8; h--){
    console.log(h);
} */

//EX2

    let i = 89;
do {
    document.write(i + '<br/>');
    i--;
} while (i >= 11);

//EX3

    let a = 100;
    let sum = 0;

for (let i = 0; i <= a; i++) {
    sum += i;
}

console.log(sum);

//EX4

    let b = 5;
    let summa = 0;

for (let i = 1; i <= b; i++) {
    summa = 0;
    for (let j = 1; j <= i; j++) {
        summa += j;
    }

console.log('Сумма ' + i + ' = ' + summa);
}

//EX5

for (let i = 8; i <= 56; i++) {
    if (i % 2 == 1) continue;

console.log(i);
}

//EX6

for (f = 1; f <= 10; f++) {
for (s = 1; s <= 10; s++) {

console.log(f + '*' + s + '=' + (f * s) ); }}

//EX7

    let n = 1000;
    let num = 0;
while (n >= 50)
{
n = n / 2;
num++;
}

console.log (n + ' and ' + num);

//EX8

    let numb = prompt('Введите числа');
    let sun = 0;
    let ov = 0;

while(numb != 0 && numb != '') {
    ov++;           
    sun = sun + Number(numb); 
    numb = prompt('Введите числа');
        if(numb != 0) {
    } else {numb = alert('Ошибка ввода')
        break; }
    }

console.log(sun + ' and ' + sun/ov);

//EX9

    let str = [4, 98, 4, 6, 1, 32, 4, 65, 4, 3, 5, 7, 89, 7, 10, 1, 36, 8, 57];
    let min = str[0];
    let max = min;
       for (i = 0; i <= str.length; i++) {
        if (str[i] > max) {max = str[i]; console.log(max)} 
        if (str[i] < min) {min = str[i]; console.log(min)} 
        }




    

   
   