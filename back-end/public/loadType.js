var billType = [];
var getBillType = new XMLHttpRequest(); //第一步：建立所需的对象
getBillType.open('GET', 'http://127.0.0.1:3000/api/getBillType', true);
getBillType.send();
/**获取数据后的处理程序*/
getBillType.onreadystatechange = function () {
    if (getBillType.readyState == 4 && getBillType.status == 200) {
        var json = getBillType.responseText; //获取到json字符串，还需解析
        billType = JSON.parse(json);
        drawTable();
    }
};
window.onpageshow = function (event) {

    if (event.persisted) {
        debugger;
        window.location.reload();

    }

};