// alert("it's working!");
var a=Math.random();
var randomnumber1=Math.floor(6*a)+1;
var randomdiceimage="images/dice"+randomnumber1+".png";
var b=Math.random();
var randomnumber2=Math.floor(6*b)+1;
var randomdiceimage2="images/dice"+randomnumber2+".png";
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomdiceimage);
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomdiceimage2);
if(randomnumber1>randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 1 wins 🚩";
}
else if(randomnumber1<randomnumber2)
{
    document.querySelector("h1").innerHTML="Player 2 wins 🚩";
}
else
{
    document.querySelector("h1").innerHTML="It's a draw!!";
}

