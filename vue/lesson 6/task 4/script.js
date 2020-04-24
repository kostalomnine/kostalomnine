let app = new Vue({
	el: '#app',
	data: {
		items: [1,2,3,4,5,6,7],
	},

	methods: {
		
		removeItem: function(index,item) {
			this.items.splice(index, 1, this.items[index]*this.items[index]);
			
		}
	}
});