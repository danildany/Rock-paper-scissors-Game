const choice=["rock","paper","scissors"];
const buttons = document.querySelectorAll(".btn-play");
let $main = document.querySelector("#main");
let $playing = document.querySelector(".playing");
let $restart = document.querySelector(".restart");
let $rulebtn = document.querySelector(".rule");
let $closebtn = document.querySelector(".close");
let $btnuser = document.querySelector("#userch");
let computerChoice;
let $btnmachine = document.querySelector("#compch");
let $btnuserImg = document.querySelector("#imguser");
let $btnmachineImg = document.querySelector("#imgmachine");


let userChoise;
buttons.forEach(function (btn) {
        btn.addEventListener('click', function(){
        userChoise = btn.getAttribute('choice')
        checkWinner(userChoise);
        });
});

function checkWinner(userChoise){
    computerChoice = pickRandomElem(choice);
    if(userChoise === computerChoice){
    document.querySelector(".state-text").textContent = "IT'S A DRAW!"
    }else if(userChoise === "rock" && computerChoice === "scissors" || userChoise === "scissors" && computerChoice === "paper" || userChoise === "paper" && computerChoice === "rock"){
        
        document.querySelector(".state-text").textContent = "YOU WIN!"        
    }else{
        document.querySelector(".state-text").textContent = "YOU LOSE"
        
    }
    $main.style.display = "none";
    $playing.style.display = "flex";
    $btnuser.classList.add(`${userChoise}`)
    $btnmachine.classList.add(`${computerChoice}`);
    $btnuserImg.src = `images/icon-${userChoise}.svg`;
    $btnmachineImg.src = `images/icon-${computerChoice}.svg`;

}

$restart.addEventListener('click', function(){
        $main.style.display = "flex";
        $playing.style.display = "none";
        $btnuser.classList.remove(userChoise);
        $btnmachine.classList.remove(computerChoice);
        });
$rulebtn.addEventListener('click',function(){
    document.querySelector(".modal-container").style.display = "flex"
});
$closebtn.addEventListener('click',function(){
    document.querySelector(".modal-container").style.display = "none"
});

function pickRandomElem(array){
    return array[Math.floor(Math.random()*array.length)]
}
