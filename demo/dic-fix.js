var fs = require('fs');
var _ = require('lodash');

var names = fs.readdirSync('dic/');

console.log(names);
var obj = {}, results = [];
_.forEach(names, function(n){
	results = [];
	var arr = fs.readFileSync('dic/'+n);
	_.forEach(JSON.parse(arr), function(item){
		obj = {};
		obj.ITEM_CODE = item.ITEM_CODE;
		obj.ITEM_NAME = item.ITEM_NAME;
		obj.ITEM_FIELD1 = item.ITEM_FIELD1;
		results.push(obj);
	});
	fs.writeFileSync('dist/'+n, JSON.stringify(results));
	console.log('dist/'+n + '---------创建成功');
});