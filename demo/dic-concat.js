var fs = require('fs');
var _ = require('lodash');

var names = fs.readdirSync('dist/');

console.log(names);
var result = {};
_.forEach(names, function(n){
	var arr = fs.readFileSync('dist/'+n);
	result[n.split('.')[0]] = JSON.parse(arr);
});
fs.writeFileSync('dist/result.json', JSON.stringify(result));
console.log('dist/result.json' + '---------创建成功');