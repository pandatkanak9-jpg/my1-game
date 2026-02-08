let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userScorepare=document.querySelector("#user-score");
const compScorepare=document.querySelector("#comp-score");

const gencompchoice=()=>{
   const option=["rock","paper","scissor"];
   const randIdx=Math.floor(Math.random()*3);
   return option[randIdx];
};

const drawgame = (userchoice)=>{
   console.log("game was draw!");
   msg.innerText="Game was Draw! Play again.";
     msg.style.backgroundcolor="blue";
};

const showWinner=(userwin,userchoice,compchoice)=>{
   if(userwin){
      userScore++;
      userScorepare.innerText=userScore;
      msg.innerText=`You win! Your ${userchoice} beats ${compchoice}`;
      msg.style.backgroundColor="green";
   }else{
      compScore++;
      compScorepare.innerText=compScore;
      msg.innerText=`You lose.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor="red";
   }
};

const playgame=(userchoice)=>{
   const compchoice=gencompchoice();

   if(userchoice===compchoice){
      drawgame();
   }else{
      let userwin=true;
      if(userchoice==="rock"){
         userwin=compchoice==="paper"?false:true;
      }else if(userchoice==="paper"){
         userwin=compchoice==="scissiors"?false:true;
      }else{
        userwin=compchoice==="rock"?false:true;
      }
      showWinner(userwin,userchoice,compchoice);
   }
};

choices.forEach((choice)=>{
   choice.addEventListener("click",()=>{
      const userchoice=choice.getAttribute("id")
      playgame(userchoice);
   });
});
