let text = document.getElementById('pole');

text.addEventListener('blur', function(){
	
localStorage.setItem('t', text.value);
});
	

window.addEventListener('load', function(){

	   if(localStorage['t'] !== undefined) 
	   	text.value = localStorage['t'];
});







