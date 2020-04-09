let name = document.getElementById('name');
let myzh = document.getElementById('myzh');
let zhen = document.getElementById('zhen');
let select = document.getElementById('select');


select.addEventListener('blur', function(){
	
localStorage.setItem('select', select.value);
});

name.addEventListener('blur', function(){
	
localStorage.setItem('name', name.value);
});

zhen.addEventListener('click', function(){
	
localStorage.setItem('zhen', zhen.checked='checked');
delete localStorage['myzh'];
});

myzh.addEventListener('click', function(){
	
localStorage.setItem('myzh', myzh.checked='checked');
delete localStorage['zhen'];
});

//при загрузке он будет удалять значение из хранилища
//и тогда if в событии ниже не найдёт нужную запись
//и не поставит лишний чек в радиокнопку, так как значение чека будет одно.


window.addEventListener('load', function(){

	   if(localStorage ['select'] !== undefined) 
	   	select.value = localStorage['select']; 

	   if(localStorage ['name']   !== undefined) 
	   	name.value = localStorage['name'];

       if(localStorage ['myzh']   !== undefined) 
	   	 myzh.checked = localStorage['myzh'];
	  
	  if(localStorage ['zhen']   !== undefined) 
	  	 zhen.checked = localStorage['zhen'];
	  	    

	 
});
//localStorage.clear();  чтобы очистить и проверить.

