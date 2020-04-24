let app = new Vue({
	el: '#app',
	data: {
       items: [12, -3, 5, 2, -7, 1],
	},

	methods: {
		filt: function() {
		this.items = this.items.filter(function(elem){
				if(elem >0 && elem <10)
					return true;
				else return false;
			});

		}
	}
});