function calc() {
    var a = parseInt(document.querySelector("#val1").value),
        b = parseInt(document.querySelector("#val2").value),
        c = document.querySelector("#operators").value,result;

        if (c == "+"){
            result = a + b;
        }else if (c == "-"){
            result = a - b;
        }else if (c == "*"){
            result = a * b;
        }else if (c == "/"){
            result = a / b;
        }

        document.querySelector("#result").value = result;
}