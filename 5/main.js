function cost_calc(event) {
    event.preventDefault();
    let res = document.getElementById("result");
    let ccost = document.getElementsByName("cost");
    let amount = document.getElementsByName("tovar");
    let m = ccost[0].value.match(/^\d+$/);

    if (m !== null) {
        ccost = parseInt(ccost[0].value, 10);
        let cost;
        if (amount[0].value === "1") {
            cost = 300;
        }
        if (amount[0].value === "2") {
            cost = 750;
        }
        if (amount[0].value === "3") {
            cost = 1234;
        }
        if (amount[0].value === "4") {
            cost = 1789;
        }
        if (amount[0].value === "5") {
            cost = 2000;
        }

        res.innerHTML = ccost * cost;
    } else {
        res.innerHTML = "ДАННЫЕ ВВЕДЕНЫ НЕКОРРЕКТНО!";
    }
    return false;
}

window.addEventListener("DOMContentLoaded", function () {
    let b = document.getElementById("button");
    b.addEventListener("click", cost_calc);
});