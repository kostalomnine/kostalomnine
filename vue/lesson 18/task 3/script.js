let app = new Vue({
	el: '#app',
	data: {
		text: '',
	},
	methods: {
		left: function() {
			this.text ='left';
	},
	right: function() {
		this.text ='right';
	},
	mid:function() {
		this.text = 'middle';
	},
	}
});