function saveData(){

localStorage.setItem(

"myKakeiboData",

JSON.stringify(appData)

);

}



function loadData(){

const savedData =

localStorage.getItem(
"myKakeiboData"
);



if(savedData){

Object.assign(

appData,

JSON.parse(savedData)

);

}


}
