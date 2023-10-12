var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");
var input = document.getElementById("input");
var moneyVal = document.getElementById("moneyVal");
var money = 100;
var boxes = document.getElementById("boxes");

function textColor(){
    if(money >= 1000000){
        moneyVal.classList.add("onemill");
    }
    if(money >= 1000000000){
        moneyVal.classList.remove("onemill");
        moneyVal.classList.add("onebill");
    }
    if(money >= 1000000000000){
        moneyVal.classList.remove("onebill");
        moneyVal.classList.add("onetrill");
    }
}
function borderthing(){
    boxes.classList.add("border");
    box1.classList.add("border");
    box2.classList.add("border");
    box3.classList.add("border");
    box1.classList.remove("boxBorder");
    box2.classList.remove("boxBorder");
    box3.classList.remove("boxBorder");
}


function clic(){
    if(money < input.value){
        alert("Please type a value less than your current balance");
        return;
    }
    if(input.value < 0){
        alert("Please type a positive value");
        return;
    }

    var one = Math.floor(Math.random() * 9);
    var two = Math.floor(Math.random() * 9);
    var three = Math.floor(Math.random() * 9);

    box1.innerHTML = one;
    box2.innerHTML = two;
    box3.innerHTML = three;

    if(one == two && two == three && one ==three){
        money -= input.value;
        money += input.value * 10;
    }else if(one == two || two == three || one == three){
        money -= input.value;
        money += input.value * 5;
    }else{
        money -= input.value;
    }
    moneyVal.innerHTML = money;
    textColor();
    if(money >= 1000000000000000){
        borderthing();
    }
}