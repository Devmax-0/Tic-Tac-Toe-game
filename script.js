let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let msgContainer = document.querySelector(".msg-container");
let newBtn = document.querySelector("#new-btn");
let msg = document.querySelector("#msg");

let turnO = true;
const winPattern = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  enableBoxes();
  msgContainer.classList.add("hide");
  resetBtn.classList.remove("hide");
  msg.innerText = "";
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
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

const showWinner = (winner) => {
  msg.innerText = `Congratulations, Winner is "${winner}"`;
  msgContainer.classList.remove("hide");
  resetBtn.classList.add("hide");
};

const disableBoxes = () => {
  for (box of boxes) {
    box.disabled = true;
  }
};

const enableBoxes = () => {
  for (box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const checkWinner = () => {
  for (let pattern of winPattern) {
    let post1Val = boxes[pattern[0]].innerText;
    let post2Val = boxes[pattern[1]].innerText;
    let post3Val = boxes[pattern[2]].innerText;

    if (post1Val != "" && post2Val != "" && post3Val != "") {
      if (post1Val == post2Val && post2Val == post3Val) {
        disableBoxes();
        showWinner(post1Val);
      }
    }
  }
};

resetBtn.addEventListener("click", resetGame);
newBtn.addEventListener("click", resetGame);
