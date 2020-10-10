const header= document.querySelector("h1");
const results=document.querySelector("#result");
const score=document.querySelector("#score");
console.log(score);
const images=document.querySelectorAll("img");
let gamescore=[0,0];

for(let i=0;i<images.length;i++) {
images[i].addEventListener("click",playrps)
}

function playrps(e) {
let playerchoice=e.target.alt;
let computerchoice=Math.random();
if(computerchoice<0.37) {
computerchoice="rock";
}
else if (computerchoice<0.64) {
  computerchoice="paper";
}
else {
  computerchoice="scissors";
}
let result=rpsresult(playerchoice,computerchoice);
console.log(result);

if(result==="Player") {
result+=" wins";
gamescore[0]++;
header.textContent="Congratulations player!!"
}
else if (result==="Computer") {
  result+=" wins";
  gamescore[1]++;
  header.textContent="Better luck next time. TRY AGAIN!!"
}
else {
  header.textContent="Oops! IT IS A DRAW!!"
}
results.style.cssText="background-color:rgba(244, 62, 62, 1);color:white;font-size:150%;margin:1% auto;padding:1%;width:40%;text-align:center;text-transform:uppercase;border-radius:5px;"
score.style.cssText="background-color:rgba(11, 168, 55, 1);color:white;font-size:150%;margin:1% auto;padding:1%;width:40%;text-align:center;text-transform:uppercase;border-radius:5px;"
results.textContent=`RESULT:
${playerchoice} vs ${computerchoice}, ${result}`;
score.textContent=`SCORE:
Player(${gamescore[0]}) vs Computer(${gamescore[1]})`


}

function rpsresult(pl,com) {
if(pl===com) {
  return "It is a draw"
}
else if(pl==="rock") {
  if(com==="paper") {
    return "Computer"
  }
  else { return "Player"}
}
else if(pl==="paper") {
  if(com==="scissors") {
    return "Computer"
  }
  else { return "Player"}
}
else {
  if(com==="rock") {
    return "Computer"
  }
  else { return "Player"}
}
}
