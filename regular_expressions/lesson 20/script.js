let str = '31.12.2025';
let res = str.match(/^(.+)\.(.+)\.(.+)$/);
console.log(res[0]); // найденный элемент
console.log(res[1]); // первый карман с днём
console.log(res[2]); // второй карман 
console.log(res[3]); // третий карман с годом