var Converter = require("csvtojson");
var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var fs = require('fs')



//获取账单数据
router.get('/getBillData', (req, res) => {
    let data = {};
    Converter()
        .fromFile("bill.csv")
        .then((jsonObj) => {
            jsonObj = JSON.stringify(jsonObj)
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.send(jsonObj);
        });
});

//获取账单类型
router.get('/getBillType', (req, res) => {
    let data = {};
    Converter()
        .fromFile("categories.csv")
        .then((jsonObj) => {
            jsonObj = JSON.stringify(jsonObj)
            res.header("Access-Control-Allow-Origin", "*");
            res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
            res.header("Access-Control-Allow-Headers", "X-Requested-With");
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            res.send(jsonObj);
        });
});


//添加账单
router.post('/addBill', (req, res) => {
    let data = {};
    let body = ""
    req.on('data', function (chunk) {
        body += chunk;  //一定要使用+=，如果body=chunk，因为请求favicon.ico，body会等于{}
    });
    req.on('end', function () {
        body = querystring.parse(body);  //将一个字符串反序列化为一个对象
        fs.appendFile('bill.csv','\r\n' + body.type + ',' + Date.parse(body.date) + ',' + body.category + "," +body.number, function (error) {
        });
    });
    
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.send("添加成功<a href='http://127.0.0.1:3000'>点击跳转</a>");
});

module.exports = router;