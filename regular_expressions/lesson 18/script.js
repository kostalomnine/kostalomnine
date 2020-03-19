// задача 2

let str1 = 'http://code.mu/ru/javascript/book/supreme/regular/method-test/';
console.log(/^http:\/\/|^https:\/\//.test(str1));


// задача 4

let str2 = 'https://sun4-10.userapi.com/JZcz_lDTb5bjKWyjybW8wKOI4RDyiAhMoNCDGw/t_O4BPD4alQ.jpg';
console.log(/jpg|jpeg$/.test(str2));


// задача 6

let str3 = '3513';
console.log(/^\d{1,12}$/.test(str3));


// задача 8

let str4 = '19.03.2020';
console.log(/^.+\..+\..+$/.test(str4));


// задача 10

let str5 = 'kostalomnino@mail.ru';
console.log(/^.+@.+\..+$/.test(str5));