let str = 'aaa [2] bbb [3] ccc [12] ddd';

let result = str.replace(/\[(\d+)\]/g, function(match0, match1 ) {
	
	return  "["+ match1*2 +"]";
});

console.log(result);
