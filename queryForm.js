function typeChange(){

}

function categoryChange(){
    
}

function dateChange(){
    
}

function queryBill(){
    let form = document.queryForm;

    let selectCategory = document.getElementById("category");
    let index = selectCategory.selectedIndex;
    
    let table = document.getElementById('tablebox');
    let rowsLength = table.rows.length;
    let totalSum = 0;
    for(let i = 1; i < rowsLength-1; i++){//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
        // 第一列 类型  第二列账单时间  第三列账单分类 第四列 账单金额
        let rowType = table.rows[i].cells[0].innerHTML=="收入"?"1":"0";
        let rowDate = table.rows[i].cells[1].getAttribute("data-date");
        let rowCategory = table.rows[i].cells[2].innerHTML;
        
        let display = true;
        
        if(form.type.value&&rowType!==form.type.value){
            display = false;
        }
        if(form.date.value){
            let dateTemp = new Date(Number(rowDate));
            let monthTemp = "";
            if(dateTemp.getMonth().toString().length==1){
                monthTemp = dateTemp.getFullYear()+"-0"+ (dateTemp.getMonth()+1);
            }else{
                monthTemp = dateTemp.getFullYear()+"-"+ (dateTemp.getMonth()+1);
            }
            display = monthTemp == form.date.value;
            
        }
        if(form.category.value&&rowCategory!==typeObject[form.category.value].name){
            
            display = false;
        }
        if(display){//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
            if(form.type.value == "1"){
                totalSum += Number(table.rows[i].cells[3].innerHTML);
            }else{
                totalSum -= Number(table.rows[i].cells[3].innerHTML);
            } 
            table.rows[i].style.display='';//显示行操作，
            
        }else{
          table.rows[i].style.display='none';//隐藏行操作
        }
      }
      table.rows[rowsLength-1].cells[3].innerHTML = totalSum.toFixed(2);
}

function addBill(){

}