var body = document.getElementById("body");
var reshoot = document.getElementById("reshoot");
var ball = document.getElementById("ball");
var shooter = document.getElementById("shooter");
var cupsOut = [];
document.addEventListener("click", shootY);
function shootY(){
    document.removeEventListener("click", shootY); 
    var top = window.getComputedStyle(ball).getPropertyValue("top");
    ball.classList.remove("shootY");
    ball.classList.add("shootX");
    ball.style.top = top;
  document.getElementById("html").setAttribute("onclick","shootX('top')");
    var shootYstr = "shootX('";
    var shootYstr1 = top.toString();
    var shootYstr2 = "')";
    var onclick = shootYstr.concat(shootYstr1, shootYstr2);
    document.getElementById("html").setAttribute("onclick", onclick);
    
}
function shootX(valueY){
    document.getElementById("html").setAttribute("onclick","");
    var top = parseFloat(valueY);
    var topABS = Math.abs(parseFloat(valueY));
    var left = window.getComputedStyle(ball).getPropertyValue("left");
    leftABS = parseFloat(left);
    ball.classList.remove("shootX");
    var newtop = top-325;
    var newtopStr = newtop.toString();
    var px = "px";
    var final = newtopStr.concat(px);
    ball.style.top = final;
    ball.style.left = left;
    if(150<topABS && topABS<175 && -125<leftABS && leftABS<-80){
        removeCup("1");
    }
    if(150<topABS && topABS<175 && -30<leftABS && leftABS<30){
        removeCup("2");
    }
    if(150<topABS && topABS<175 && 80<leftABS && leftABS<125){
        removeCup("3");
    }
    if(105<topABS && topABS<140 && -80<leftABS && leftABS<-35){
        removeCup("4");
    }
    if(105<topABS && topABS<140 && 25<leftABS && leftABS<70){
        removeCup("5");
    }
    if(45<topABS && topABS<80 && -35<leftABS && leftABS<35){
        removeCup("6");
    }
    setTimeout(function(){
        if(cupsOut.length == 6){
            alert("Winner! Gagnant!");
        }else{
            reshoot.style.display = "block";
        }
    },500);
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
    ball.classList.add("shootY");
    ball.style.top = "0px";
    ball.style.left = "0px";
    setTimeout(function(){
        document.addEventListener("click", shootY); 
    },1000);
}