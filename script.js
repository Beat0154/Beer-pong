var body = document.getElementById("body");
var reshoot = document.getElementById("reshoot");
var ball = document.getElementById("ball");
var shooter = document.getElementById("shooter");
var cupsOut = [];
function shootX(){
    var left = parseFloat(window.getComputedStyle(ball).getPropertyValue("left"));
    ball.classList.remove("shootX");
    ball.style.left = "125px";
    ball.classList.add("shootY");
    var shootYstr = "shootY('";
    var shootYstr1 = left.toString();
    var shootYstr2 = "')";
    var onclick = shootYstr.concat(shootYstr1, shootYstr2);
    body.setAttribute("onclick", onclick);
}
function shootY(valueX){
    body.setAttribute("onclick","");
    var x = parseFloat(valueX);
    var top = parseFloat(window.getComputedStyle(ball).getPropertyValue("top"));
    var topABS = Math.abs(top);
    ball.classList.remove("shootY");
    ball.style.left = x;
    ball.style.top = top-325;
    if(150<topABS && topABS<175 && 0<x && x<45){
        removeCup("1");
    }
    if(150<topABS && topABS<175 && 95<x && x<140){
        removeCup("2");
    }
    if(150<topABS && topABS<175 && 210<x && x<255){
        removeCup("3");
    }
    if(105<topABS && topABS<140 && 45<x && x<90){
        removeCup("4");
    }
    if(105<topABS && topABS<140 && 150<x && x<195){
        removeCup("5");
    }
    if(55<topABS && topABS<80 && 90<x && x<195){
        removeCup("6");
    }
    setTimeout(function(){
        if(cupsOut.length == 6){
            alert("Winner! Gagnant!");
        }else{
            reshoot.style.display = "block";
        }
    },1000);
}

function removeCup(cup){
    var cupStr = "cup";
    var element = cupStr.concat(cup);
    document.getElementById(element).style.visibility = "hidden";
    let alreadyExists = cupsOut.includes(cup);
    if(alreadyExists==false){  
        cupsOut.push(cup);
    }
    console.log(cupsOut);
}

function reshoot1(){
    reshoot.style.display = "none";
    ball.classList.add("shootX");
    ball.style.top = "0px";
    setTimeout(function(){
        body.setAttribute("onclick","shootX()");
    },500);
}