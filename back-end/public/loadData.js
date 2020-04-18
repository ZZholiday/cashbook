var billData = [];
var getBillData = new XMLHttpRequest();//第一步：建立所需的对象
getBillData.open('GET', 'http://127.0.0.1:3000/api/getBillData', true);
getBillData.send();
/**获取数据后的处理程序*/
getBillData.onreadystatechange = function () {
    if (getBillData.readyState == 4 && getBillData.status == 200) {
        var json = getBillData.responseText;//获取到json字符串，还需解析
        billData = JSON.parse(json);
        drawTable();
    }
};