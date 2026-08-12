window.onload = function(){

    loadData();

    updateDisplay();

    showHistory();

    showRanking();

    updateChart();

    goHome();

};


// ====================
// 記録保存
// ====================

function saveRecord(){

    const type =
        document.getElementById("type").value;

    const amount =
        Number(document.getElementById("amount").value);

    const category =
        document.getElementById("category").value;

    const memo =
        document.getElementById("memo").value;


    if(!amount || amount <= 0){

        alert("金額を入力してください");

        return;

    }


    // 収入

    if(type === "income"){

        addIncome(amount);

    }


    // 支出

    else if(type === "expense"){

        addExpense(amount, category);

    }


    // Suicaチャージ

    else if(type === "charge"){

        if(!chargeSuica(amount)){

            return;

        }

    }


    // 履歴追加

    addHistory(
        type,
        amount,
        category,
        memo
    );


    // 画面更新

    updateDisplay();

    showHistory();

    showRanking();

    updateChart();


    // 入力欄を空にする

    document.getElementById("amount").value = "";

    document.getElementById("memo").value = "";


    alert("保存しました！");

}



// ====================
// ホーム
// ====================

function goHome(){

    document.getElementById("home").style.display = "block";

    document.getElementById("record").style.display = "none";

    document.getElementById("analysis").style.display = "none";

    document.getElementById("history").style.display = "none";

}



// ====================
// 記録
// ====================

function goRecord(){

    document.getElementById("home").style.display = "none";

    document.getElementById("record").style.display = "block";

    document.getElementById("analysis").style.display = "none";

    document.getElementById("history").style.display = "none";

}



// ====================
// 分析
// ====================

function goAnalysis(){

    document.getElementById("home").style.display = "none";

    document.getElementById("record").style.display = "none";

    document.getElementById("analysis").style.display = "block";

    document.getElementById("history").style.display = "none";


    updateChart();

    showRanking();

}



// ====================
// 履歴
// ====================

function goHistory(){

    document.getElementById("home").style.display = "none";

    document.getElementById("record").style.display = "none";

    document.getElementById("analysis").style.display = "none";

    document.getElementById("history").style.display = "block";


    showHistory();

}