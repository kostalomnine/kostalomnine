class Validator {

isEmail(stroka) {

if(stroka.indexOf('@') !== -1 && stroka.indexOf('.', '@') !==-1)
return true;
else return false;
}

isDomain(stroka) {

var ind = stroka.indexOf('.');
return stroka.slice(ind);
}

isDate(stroka) {
var mass = stroka.split('.');
if(mass[0].length<2 || mass[0].length>2 )
return false;
else if(mass[1].length<2 || mass[1].length>2)
return false;
else if(mass[2].length<4 || mass[2].length>4)
return false;
else return true;
}

isPhone(stroka) {
var re=/^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,10}$/;
var valid = re.test(stroka);
return valid;
}
}


var validator = new Validator();

console.log(validator.isEmail('phphtml@mail.ru'));
console.log(validator.isDomain('phphtml.net'));
console.log(validator.isDate('12.05.2020'));
console.log(validator.isPhone('+795385925')); //тут можете формат своей страны