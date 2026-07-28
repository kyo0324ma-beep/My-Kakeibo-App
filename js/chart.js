let expenseChart;



function updateChart(){


const canvas =

document.getElementById(
"expenseChart"
);



if(!canvas){

return;

}



const data = getCategoryTotal();



const labels = Object.keys(data);


const values = Object.values(data);



if(expenseChart){

expenseChart.destroy();

}



expenseChart = new Chart(canvas, {


type:"doughnut",


data:{


labels:labels,


datasets:[{

label:"支出",

data:values

}]


},


options:{


responsive:true

}


});


}
