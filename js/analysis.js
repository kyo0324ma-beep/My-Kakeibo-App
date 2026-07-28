function getCategoryTotal(){


let result = {};



appData.history.forEach(item=>{


if(item.type === "expense"){



if(!result[item.category]){

result[item.category] = 0;

}



result[item.category] += item.amount;


}


});


return result;


}





function showRanking(){


const data = getCategoryTotal();



let ranking = [];



for(let key in data){


ranking.push({

category:key,

amount:data[key]

});


}



ranking.sort(

(a,b)=>b.amount-a.amount

);



const area =

document.getElementById(
"ranking"
);



if(!area){

return;

}



let html = "";



ranking.forEach((item,index)=>{


html +=

`
<p>

${index+1}位

${item.category}

${moneyFormat(item.amount)}

</p>

`;


});



area.innerHTML = html;


}
