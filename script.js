let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#newgame-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true; //playerX , playerO

const winpattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8]
];

const resetGame = () =>{
    turnO = true;
    enableseBoxes();
    msgContainer.classList.add("hide"); 
}



boxes.forEach(box => {
  box.addEventListener("click", () => {
    console.log("box clicked successfully");
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const disableseBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = true;
    }
}

const enableseBoxes = ()=>{
    for (let box of boxes) {
        box.disabled = false;
        box.innerText = "";

    }   
}


const showWinner = (winner)=>{
    msg.innerText = `Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableseBoxes();
}
const checkWinner = () => {
  for (patterns of winpattern) {
    
    let pos1val = boxes[patterns[0]].innerText;
    let pos2val = boxes[patterns[1]].innerText;
    let pos3val = boxes[patterns[2]].innerText;
    
    if(pos1val != "" && pos2val != "" && pos3val != ""){
        if(pos1val === pos2val && pos2val === pos3val){
            console.log("WINNNER in this game",pos1val);
            showWinner(pos1val)
        }
        

    }
  }

};

  newGameBtn.addEventListener("click", resetGame);
  resetBtn.addEventListener("click",resetGame);

