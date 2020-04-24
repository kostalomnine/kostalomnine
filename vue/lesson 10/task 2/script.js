let app = new Vue({
	el: '#app',
	data: {
		items: [],
		str: '',
	},

	methods: {
		vivod: function() {
			
			this.items = this.str.split(' ');
			console.log(items);
			return items;
		}
	}
	
});