class MyString {

	reverse(stroka) {
	
	      return stroka.split("").reverse().join("");
	}


	ucFirst(stroka) {

		  return stroka[0].toUpperCase() + stroka.slice(1);
	}

	ucWords(stroka) {
        
		 var mem = stroka.split(" ");
		 for(var i=0; i<3; i++)
		 	{
		 		mem[i] = mem[i].toUpperCase().slice(0,1) + mem[i].slice(1);
		 	}
		 return mem;
    }	
}

var str = new MyString();

console.log(str.reverse('abcde')); //выведет 'edcba'
console.log(str.ucFirst('abcde')); //выведет 'Abcde'
console.log(str.ucWords('abcde abcde abcde')); //выведет 'Abcde Abcde Abcde'