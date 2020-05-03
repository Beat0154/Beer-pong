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
    if(140<topABS && topABS<175 && -125<leftABS && leftABS<-60){
        removeCup("1");
    }
    if(140<topABS && topABS<175 && -40<leftABS && leftABS<40){
        removeCup("2");
    }
    if(140<topABS && topABS<175 && 60<leftABS && leftABS<125){
        removeCup("3");
    }
    if(85<topABS && topABS<140 && -90<leftABS && leftABS<-25){
        removeCup("4");
    }
    if(85<topABS && topABS<140 && 15<leftABS && leftABS<80){
        removeCup("5");
    }
    if(25<topABS && topABS<80 && -45<leftABS && leftABS<45){
        removeCup("6");
    }
    setTimeout(function(){
        if(cupsOut.length == 6){
            var time = timer();
            alert("Winner! Gagnant!");
            document.getElementById("time").innerHTML = time + " seconds";
            document.getElementById("time").style.display="block";
        }else{
            reshoot.style.display = "block";
        }
    },500);
}

function removeCup(cup){
    var cupStr = "cup";
    var element = cupStr.concat(cup);
    document.getElementById(element).classList.add("fadeAway");
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
var startDate = new Date();
var startTime = startDate.getTime();
function timer(){
    var dateNow = new Date ();
    var timeNow = dateNow.getTime();
    var timeDiff = timeNow - startTime;
    var secondsElapsed = Math.floor(timeDiff/1000);
    return (secondsElapsed); 
}