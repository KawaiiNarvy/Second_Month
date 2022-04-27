const a = 1
for (let i = a; i < 101; i++){
    if (i % 15 == 0) console.log(`${i} 'FizzBuzz'`);
    else if (i % 3 == 0) console.log(`${i} 'Fizz'`);
    else if (i % 5 == 0) console.log(`${i} 'Buzz'`);
    else console.log(i);
}
// через while 
// let a =1
// while( a <= 100){
//     if (a % 15 == 0) console.log(`${a} 'FizzBuzz'`);
//     else if (a % 3 == 0) console.log(`${a} 'Fizz'`);
//     else if (a % 5 == 0) console.log(`${a} 'Buzz'`);
//     else console.log(a);
//     a++
// }