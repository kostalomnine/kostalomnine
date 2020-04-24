let app = new Vue({
	el: '#app',
	data: {
		text: 'тут что-то',
	},
	filters: {
		formatDate: function(value) {
			return value.split('-').reverse().join('.');
		},
	},
	methods: {
		change: function(){
		this.text = 'меня не видно';
	}
	}
});