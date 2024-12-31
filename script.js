let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorePara=document.querySelector("#user-score");
const userCompPara=document.querySelector("#comp-score");
const genCompChoice =()=>{
    //rock paper scissor
    const options=["stone","paper","scissor"];
   const randIdx= Math.floor(Math.random()*3);
   return options[randIdx];
}

const drawGame=()=>{
    msg.innerText="Draw game!Restart";
    msg.style.backgroundColor="black";

};
const showWinner=(userWin)=>{
    if(userWin){
        userScore++;
        userScorePara.innerText=userScore;
        msg.innerText="Yeah! you win:)";
        msg.style.backgroundColor="Green";
    }else{
        compScore++;
        userCompPara.innerText=compScore;
        console.log("You lose:(");
        msg.innerText="You lose:(";
        msg.style.backgroundColor="red";

    }
}
const playGame=(userChoice)=>{
console.log("user choice=",userChoice);
//generate cmp choice
 const compChoice=genCompChoice();
 console.log("computer choice=",compChoice);

 if(userChoice===compChoice){
    drawGame();
 }else{
    let userWin=true;
    if(userChoice==="stone"){
        //cmp choices scissors paper
        userWin=compChoice==="paper"? false:true;
    }else if(userChoice==="paper"){
        //stone,scissor
        userWin=compChoice==="scissor"?false:true;
    }else{
        //stone,scissor
        userWin=compChoice==="stone"?false:true;
    }
    showWinner(userWin);
 }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});