function addHistory(
type,
amount,
category,
memo=""
){


const today = new Date();


const date =

today.getFullYear()
+
"/"
+
(today.getMonth()+1)
+
"/"
+
today.getDate();



const item = {


date: date,


type: type,


amount: Number(amount),


category: category,


memo: memo



};



appData.history.unshift(item);



saveData();



showHistory();


}




function deleteHistory(index){


if(!confirm("この記録を削除しますか？")){

return;

}



appData.history.splice(index,1);



saveData();



showHistory();


}





function searchHistory(keyword){


return appData.history.filter(item=>{


return (

item.category.includes(keyword)

||

item.memo.includes(keyword)

||

item.date.includes(keyword)


);


});


}
