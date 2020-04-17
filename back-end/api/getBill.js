var Converter = require("csvtojson");
var express = require('express');
var router = express.Router();

//获取账单数据
router.get('/getBillData', (req, res) => {
    let data = {};
    Converter()
    .fromFile("bill.csv")
    .then((jsonObj)=>{
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
    .then((jsonObj)=>{
        jsonObj = JSON.stringify(jsonObj)
        res.header("Access-Control-Allow-Origin", "*");
        res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        res.send(jsonObj);
    });
});

module.exports = router;