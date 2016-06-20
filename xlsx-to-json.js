/**
 * 简单excel数据转json
 * Excel数据第一行是标题  第二行是json的key 剩下的是数据
 * @type {exports|module.exports}
 */
var xlsx = require("node-xlsx"),
    fs = require("fs");

var xlsData = xlsx.parse('in.xls');
var i = 0,
    len = xlsData[0].data.length,
    keys = xlsData[0].data[1],
    obj = {},
    j = 0,
    len2 = keys.length,
    result = [];
for(i = 2;i < len;i++){
    obj = {};
    for(j = 0;j < len2;j++){
        obj[keys[j]] = xlsData[0].data[i][j];
    }
    result.push(obj);
}
fs.writeFileSync('out.json', JSON.stringify(result));