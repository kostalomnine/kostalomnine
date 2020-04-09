let page = true;  //page
let text = document.getElementById("pole");
let span = document.getElementById('span');
if (localStorage["znach"] === undefined) {
	localStorage["znach"] = '{"values": ["' + text.value + '"] }';
}

let znach = JSON.parse(localStorage["znach"]);

let now = znach['values'].length-1;
text.value = znach['values'][now];

text.addEventListener('change', function(){
	znach['values'].push(text.value);	
	now = znach['values'].length-1;
	knopki();
});

if (localStorage["buttons_appeared_once"]) knopki();

function knopki(){
	if (span.innerHTML == ''){
		span.innerHTML =
		 "<button id='nazad'>←</button><button id='vpered'>→</button>";
	}

	let nazad = document.getElementById("nazad");
	let vpered = document.getElementById("vpered");

	vpered.disabled = true;
	nazad.disabled = false;

	while(page){	
		nazad.addEventListener('click', function(){
			if (now > 0) {
				now--;
				text.value = znach['values'][now];
				vpered.disabled = false;
				}
			if (now == 0) nazad.disabled = true;
		});

		vpered.addEventListener('click', function(){
			if (now < znach['values'].length-1) {
				now++;
				text.value = znach['values'][now];
				nazad.disabled = false;
				}
			if (now == znach['values'].length-1) vpered.disabled = true;
		});
		page = false;
		localStorage["buttons_appeared_once"] = true;
	}
}


window.addEventListener('beforeunload', function(){
	localStorage["znach"] = JSON.stringify(znach);
});