function drawTable(){
    if(!billType.length){return;}
    if(!billData.length){return;}
    
    let typeObject = {};
    billType.forEach(element => {
        typeObject[element.id] = {type:element.type,name:element.name}
    });
    var tdArr = document.getElementById('tablebox').firstElementChild;
    let totalSum = 0;
    for (let i = 0; i < billData.length; i++) {
        var tr = document.createElement("tr");
        let typeTemp = "";
        let numberTemp = (Number(billData[i].amount)).toFixed(2);

        if(billData[i].type === "1"){
            typeTemp = "收入";
            totalSum += Number(numberTemp);
        }else{
            typeTemp = "支出";
            totalSum -= Number(numberTemp);
        }
        
        let dateTemp = new Date(Number(billData[i].time)).toLocaleString();
        // type,time,category,amount
        tr.innerHTML += '<td>' + typeTemp + '</td>';
        tr.innerHTML += '<td>' + dateTemp + '</td>';
        tr.innerHTML += '<td>' + typeObject[billData[i].category].name + "(" + typeTemp + ')</td>';
        tr.innerHTML += '<td>' + numberTemp + '</td>';
        tdArr.appendChild(tr);
    }
    var tr = document.createElement("tr");
    tr.innerHTML += '<td>总金额</td>';
    tr.innerHTML += '<td></td>';
    tr.innerHTML += '<td></td>';
    tr.innerHTML += '<td>' + totalSum + '</td>';
    tdArr.appendChild(tr);
}