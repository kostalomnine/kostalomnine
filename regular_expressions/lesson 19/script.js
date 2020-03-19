let str = 'a1b c34d x567z';
let res = str.match(/\d/g);
let summ = 0;
for(let elem of res)
summ += new Number(elem);
console.log(summ);