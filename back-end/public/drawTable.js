let typeObject = {};

function drawTable(){
    if(!billType.length){return;}
    if(!billData.length){return;}
    
    billType.forEach(element => {
        typeObject[element.id] = {type:element.type,name:element.name}
    });

    var select = document.getElementById('category');
    var select1 = document.getElementById('category1');
    for(let i = 0; i < billType.length; i++){
        var option = document.createElement("option");
        option.setAttribute("value",billType[i].id);
        option.innerText = billType[i].name;
        
        var option1 = document.createElement("option");
        option1.setAttribute("value",billType[i].id);
        option1.innerText = billType[i].name;
        select.appendChild(option);
        select1.appendChild(option1);
    }

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
        tr.innerHTML += '<td data-date='+ billData[i].time +'>' + dateTemp + '</td>';
        // tr.innerHTML += '<td>' + typeObject[billData[i].category].name + "(" + typeTemp + ')</td>';
        tr.innerHTML += '<td>' + typeObject[billData[i].category].name +'</td>';
        tr.innerHTML += '<td>' + numberTemp + '</td>';
        tdArr.appendChild(tr);
    }
    var tr = document.createElement("tr");
    tr.innerHTML += '<td>总金额</td>';
    tr.innerHTML += '<td></td>';
    tr.innerHTML += '<td></td>';
    tr.innerHTML += '<td>' + totalSum.toFixed(2) + '</td>';
    tdArr.appendChild(tr);
}