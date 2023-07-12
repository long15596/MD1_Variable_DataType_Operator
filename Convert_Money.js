function convertMoney() {
    let amount = document.getElementById("amount").value;
    let formC = document.getElementById("from").value;
    let toC = document.getElementById("to").value;
    let result;
    if (formC == "vnd" && toC =="usd" ) {
        result =  amount / 23000;
    }
    else if (formC == "usd" && toC == "vnd") {
        result = amount * 23000;
    }
    else {
        alert("Chọn lại đơn vị tiền tệ");
    }
    document.getElementById("result").innerHTML = result
}

