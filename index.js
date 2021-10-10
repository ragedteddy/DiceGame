
function fun(num){
    num = Math.floor(num*6) +1;
    return num;
}

var p1 = Math.random();
p1 = fun(p1);

var p2 = Math.random();
p2 = fun(p2);

document.getElementById("img1").setAttribute("src", "images/dice"+p1+".png");
document.getElementById("img2").setAttribute("src", "images/dice"+p2+".png");

if(p1 > p2){
    document.getElementById("results").innerHTML = "Player 1 wins!";
}else if(p1 < p2){
    document.getElementById("results").innerHTML = "Player 2 wins!";
}else{
    document.getElementById("results").innerHTML = "Draw!";
}