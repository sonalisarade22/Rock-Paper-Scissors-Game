let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const userScorepara=document.querySelector("#user-score");
const compScorepara=document.querySelector("#comp-score");

const getcomuterchoice=()=>
{
const options=["rock","paper","scissors"];
const randIdx = Math.floor(Math.random() * 3);
return options[randIdx];
};

const drawgame=()=>
{
    msg.innerText="Game Drawn!";
    msg.style.backgroundColor = "blue";
}
const showWinner = (userwin, userChoice, compChoice) => {
    if (userwin) {
        userScore++;
        userScorepara.innerText = userScore;
        msg.innerText = `You Win! ${userChoice} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    } else {
        compScore++; 
        compScorepara.innerText = compScore; 
        msg.innerText = `You Lose! ${compChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
    }
}

const playGame=(userChoice)=>
{
    const compchoice=getcomuterchoice();

    if(userChoice===compchoice)
    {
drawgame();
    }
    else{
        let userwin=true;
        if(userChoice=="rock")
        {
            userwin=compchoice=="paper"?false:true;
        }
        else if(userChoice=="paper")
        {
            userwin=compchoice==="scissors" ? false:true;
        }
        else{

            userwin=compchoice=="rock"?false:true;
        }
        showWinner(userwin, userChoice, compchoice);
    }

};

choices.forEach((choice)=>
{
choice.addEventListener("click",()=>
{
    const userChoice=choice.getAttribute("id");
    playGame(userChoice);

});
});