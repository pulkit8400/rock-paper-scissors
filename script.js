let userScore=0;
let compScore=0;

let choices=document.querySelectorAll(".choice");
let msg=document.querySelector("#msg");
let userPara=document.querySelector("#user-score");
let compPara=document.querySelector("#comp-score");

let getCompchoice=()=>{
    let options=["rock","paper","scissors"];
    let randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

let draw=()=>
    {
        msg.innerText="Draw. Play again!";
        msg.style.backgroundColor="#081b31";
    }

let showWinner=(userWin,userChoice,compChoice)=>
    {
        if(userWin===true)
            {
                msg.innerText=`You Win! Your ${userChoice} beats ${compChoice}`;
                msg.style.backgroundColor="green";
                userScore++;
                userPara.innerText=userScore;
            }
        else{
            msg.innerText=`You Lose! ${compChoice} beats Your ${userChoice}`;
            msg.style.backgroundColor="red";
            compScore++;
            compPara.innerText=compScore;
        }
    }

let playGame=(userChoice)=>{
    let compChoice=getCompchoice();

    if(userChoice===compChoice)
        {
            draw();
        }
    else{
        let userWin=true;
        if(userChoice==="rock")
            {
                userWin=compChoice==="paper" ? false:true;
            }

        else if(userChoice==="paper")
            {
                userWin=compChoice==="scissors" ? false:true;
            }

        else
        {
            userWin=compChoice==="rock" ? false:true;
        }

        showWinner(userWin,userChoice,compChoice);
    }
}

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        let userChoice=choice.getAttribute("id");
        playGame(userChoice);
    })
})