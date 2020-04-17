function drawTable(){
    if(!billType.length){return;}
    if(!billData.length){return;}
    
    let typeObject = {};
    billType.forEach(element => {
        typeObject[element.id] = {type:element.type,name:element.name}
    });
    var tdArr = document.getElementById('tablebox').firstElementChild;
    for (let i = 0; i < billData.length; i++) {
        var tr = document.createElement("tr");
        console.log(billData[i])
        let typeTemp = billData[i].type === "1"?"收入":"支出" ;
        let dateTemp = new Date(Number(billData[i].time)).toLocaleString();
        // type,time,category,amount
        tr.innerHTML += '<td>' + typeTemp + '</td>';
        tr.innerHTML += '<td>' + dateTemp + '</td>';
        tr.innerHTML += '<td>' + typeObject[billData[i].category].name + "(" + typeTemp + ')</td>';
        tr.innerHTML += '<td>' + (Number(billData[i].amount)).toFixed(2) + '</td>';
        tdArr.appendChild(tr)
    }

    document.createElement("tr");
}