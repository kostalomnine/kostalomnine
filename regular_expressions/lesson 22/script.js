let str = 'sss site.ru zzz site.com kkk';
let res = str.replace(/\w+\.\w+/g, '<a href="http://$&">$&</a>' );
console.log(res);