function hide(){
    document.getElementById("img1").style.display = "none";
}
function show(){
    document.getElementById("img1").style.display = "block";
}

document.getElementById("btn5").addEventListener("click", function(){
var age = document.getElementById("age").value;


if(age == "mahal"){
    alert("I love You");
}


else if(age =="MAHAL"){
    alert("I love You");
}
else if(age ==""){
    alert("pLEASE fILL oUT THE iNPUT AREA");
}
else if(age =="Mahal"){
    alert("I love You");
}



else{
    alert("Mali!");
}










});