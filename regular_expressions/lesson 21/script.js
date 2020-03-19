let str = '12 34 56 78';
let res = str.replace(/([1-9])([1-9])/g, '$2$1');
console.log(res);