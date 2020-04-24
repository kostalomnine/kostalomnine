let app = new Vue({
	el: '#app',
	data: {
		str: '2020-04-24',
	},
	filters: {
		formatDate: function(value) {
			return value.split('-').reverse().join('.');
		},
	}
});