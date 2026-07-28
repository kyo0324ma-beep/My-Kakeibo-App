function addIncome(amount){

    appData.cash += amount;

    appData.income += amount;

    saveData();

}



function addExpense(amount, category){

    appData.cash -= amount;


    if(!appData.spending[category]){

        appData.spending[category] = 0;

    }


    appData.spending[category] += amount;


    saveData();

}



function chargeSuica(amount){

    if(appData.cash < amount){

        alert("現金残高が足りません");

        return false;

    }


    appData.cash -= amount;

    appData.suica += amount;


    saveData();

    return true;

}



function getTotalMoney(){

    return appData.cash + appData.suica;

}
