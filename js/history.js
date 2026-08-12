function addHistory(
    type,
    amount,
    category,
    memo = "",
    recordDate = ""
){

    if(!recordDate){

        const today = new Date();

        recordDate =
            today.getFullYear()
            + "-"
            + String(today.getMonth()+1).padStart(2,"0")
            + "-"
            + String(today.getDate()).padStart(2,"0");

    }


    const item = {

        date: recordDate,

        type: type,

        amount: Number(amount),

        category: category,

        memo: memo

    };


    appData.history.unshift(item);

    saveData();

    showHistory();

}



// ====================
// 履歴削除
// ====================

function deleteHistory(index){

    if(!confirm("この記録を削除しますか？")){

        return;

    }


    const item =
        appData.history[index];


    if(!item){

        return;

    }


    const amount =
        Number(item.amount);


    // 収入を削除
    // → 現金を減らす

    if(item.type === "income"){

        appData.cash -= amount;

        appData.income -= amount;

    }


    // 支出を削除
    // → 現金を戻す

    else if(item.type === "expense"){

        appData.cash += amount;


        if(appData.spending[item.category]){

            appData.spending[item.category]
                -= amount;


            if(
                appData.spending[item.category]
                <= 0
            ){

                delete appData.spending[
                    item.category
                ];

            }

        }

    }


    // Suicaチャージを削除
    // → Suicaから現金へ戻す

    else if(item.type === "charge"){

        appData.suica -= amount;

        appData.cash += amount;

    }


    // 履歴から削除

    appData.history.splice(index,1);


    saveData();


    updateDisplay();

    showHistory();

    showRanking();

    updateChart();

}



// ====================
// 履歴検索
// ====================

function searchHistory(keyword){

    return appData.history.filter(item => {

        return (

            item.category.includes(keyword)

            ||

            item.memo.includes(keyword)

            ||

            item.date.includes(keyword)

        );

    });

}