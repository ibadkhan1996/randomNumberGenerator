var para = document.getElementById("para");
var simName = document.getElementById("sim");
var operator = Math.floor(Math.random()*5);
var code = Math.floor(Math.random()*8);
var maxNum = 9000000;
var minNum = 0000000;
var mainNum = Math.floor(Math.random()*(maxNum - minNum + 1) + minNum);
para.innerHTML = "03" + operator.toString() + code.toString() + "-" + mainNum;

if(operator == "1"){
    simName.innerHTML = "Zong";
    simName.style.color = "lightgreen";
}
else if(operator == "2"){
    simName.innerHTML = "Warid";
    simName.style.color = "royalblue";
}
else if(operator == "3"){
    simName.innerHTML = "Ufone";
    simName.style.color = "orange";
}
else if(operator == "4"){
    simName.innerHTML = "Telenor";
    simName.style.color = "lightblue";
}
else{
    simName.innerHTML = "Jazz";
    simName.style.color = "red";
}