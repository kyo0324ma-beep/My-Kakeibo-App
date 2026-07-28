function moneyFormat(num){

return Number(num).toLocaleString()
+
"円";

}




function updateDisplay(){


document.getElementById(
"cash"
).textContent =

moneyFormat(
appData.cash
);



document.getElementById(
"suica"
).textContent =

moneyFormat(
appData.suica
);



document.getElementById(
"total"
).textContent =

moneyFormat(
getTotalMoney()
);



}




function showHistory(){


const area =

document.getElementById(
"historyList"
);



if(!area){

return;

}



let html="";



appData.history.forEach(
(item,index)=>{


let sign =

item.type === "expense"

?

"-"

:

"+";



html += `

<div class="card">

<p>
${item.date}
</p>

<h3>
${item.category}
</h3>

<p>
${item.memo}
</p>


<strong>

${sign}
${moneyFormat(item.amount)}

</strong>


<br>


<button onclick="deleteHistory(${index})">

削除

</button>


</div>

`;



});



area.innerHTML = html;


}
