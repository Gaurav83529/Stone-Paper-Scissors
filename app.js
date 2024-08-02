let userscore=0;
let compscore=0;

const choices= document.querySelectorAll(".choice");
const msg=document.querySelector("#msg")

const userScorePara=document.querySelector("#user-score");
const compScorePara=document.querySelector("#comp-score");

const gencompChoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];

};
const drawGame =()=>{
    msg.innerText="Game was Draw, Play Again";
    msg.style.backgroundColor="palevioletred";

};
const showWinner=(userWin,userChoice,compChoice)=>{
    if(userWin){
        userscore++;
        userScorePara.innerText=userscore;
        msg.innerText=`You win, Your ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor="green";
    }
    else{
         compscore++;
        compScorePara.innerText=compscore;
        msg.innerText= `You lose ${compChoice} beats Your ${userChoice}`;
        msg.style.backgroundColor="red";

    }
}
const playGame=(userChoice)=>{
    // Generate computer choice
    const compChoice=gencompChoice();
    if(userChoice===compChoice){
        //Draw Game 
        drawGame();
    }
    else{
        let userWin=true;
        if(userChoice==="rock"){
            //scissor,paper
            userWin=compChoice==="paper"? false:true;
        }else if(userChoice==="paper"){
            //comp =rock,scissors
             userWin=compChoice==="scissors" ?false:true;
        }
        else{
            userWin=compChoice==="rock"?false:true;
        }
        showWinner(userWin,userChoice,compChoice)
    }
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        playGame(userChoice);
    });
});