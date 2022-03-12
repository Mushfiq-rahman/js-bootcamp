(function(){
    const formElm = document.querySelector("form");
    const userINputElm = document.getElementById("luck-input");
    const luckyNumberElm = document.querySelector(".lucky-number span");
    const p1BtnElm = document.querySelector(".p1Btn");
    const p2BtnElm = document.querySelector(".p2Btn");
    const p1InputElm = document.querySelector(".p1");
    const p2InputElm = document.querySelector(".p2");
    const winnerElm = document.querySelector(".winner");
    const resetBtnElm = document.querySelector("#resetBtn");
    
    let luckNumber;
    let p1Value;
    let p2Value;
    let p1Turn;
    let p2Turn;
    let gameOver;
    
    
    function randomNum(){
        return Math.floor(Math.random() * 10) + 1
    }
    
    function initialState() {
        luckNumber = randomNum();
        p1Value = 0;
        p2Value = 0;
        p1Turn = true;
        p2Turn = true;
        gameOver = false;

    
        luckyNumberElm.textContent = luckNumber;
        p1InputElm.textContent = 0
        p2InputElm.textContent = 0
        p1BtnElm.removeAttribute("disabled");
        p2BtnElm.removeAttribute("disabled");
        winnerElm.textContent = ""
     }
     
     initialState()
    
    function winnerState(player) {
      gameOver = true;
      winnerElm.textContent = `${player} is winner`;
    
      p2BtnElm.setAttribute("disabled", "disabled");
    
      p1BtnElm.setAttribute("disabled", "disabled");
    }
    
    formElm.addEventListener("submit", function (evt) {
      evt.preventDefault();
    
      luckNumber = parseInt(userINputElm.value);
    
      luckyNumberElm.textContent = luckNumber;
    
      userINputElm.value = "";
    });
    
    p1BtnElm.addEventListener("click", function (evt) {
      if (p1Turn && luckNumber !== p1Value && luckNumber !== p2Value) {
        p1Value++;
        p1InputElm.textContent = p1Value;
        p1Turn = false;
        p2Turn = true;
        p1BtnElm.setAttribute("disabled", "disabled");
        p2BtnElm.removeAttribute("disabled");
      }
      if (p1Value === luckNumber) {
        winnerState("P1");
      }
    });
    
    p2BtnElm.addEventListener("click", function (evt) {
      if (p2Turn && luckNumber !== p1Value && luckNumber !== p2Value) {
        p2Value++;
        p2InputElm.textContent = p2Value;
        p2Turn = false;
        p1Turn = true;
        p2BtnElm.setAttribute("disabled", "disabled");
        p1BtnElm.removeAttribute("disabled");
      }
    
      if (p2Value === luckNumber) {
        winnerState("P2");
      }
    });
    
    resetBtnElm.addEventListener("click", function (evt) {
      initialState()
    });
    
}())

