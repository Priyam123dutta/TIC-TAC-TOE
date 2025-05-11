console.log("Welcome to Tic-Tac-Toe!");

let turn = "X";
let gameover = false;
let tie = true;

const timeout = setTimeout(() => {
    console.log("Play Started");
    document.querySelector(".info p").innerText = "Turn for X";
    document.querySelector(".info p").setAttribute('style', 'font-size: 25px');
}, 1000);

const changeTurn = () => {
    return turn === "X" ? "O" : "X";
};

const celebration = (winner) => {
    document.querySelector(".resultBoard").classList.add("modResBoard");
    let resultBoard = Array.from(document.querySelectorAll(".resultBoard p"));
    resultBoard[0].innerText = "Congratulations";
    resultBoard[1].innerText = `${winner} Wins`;
};

const declareTie = () => {
    document.querySelector(".info p").innerText = "It's a Tie!";
    document.querySelector(".resultBoard").classList.add("modResBoard");
    let resultBoard = Array.from(document.querySelectorAll(".resultBoard p"));
    resultBoard[0].innerText = "Game Over";
    resultBoard[1].innerText = "It's a Tie!";
};


const checkWin = () => {
    const startPara = document.querySelector(".info p");
    const square = Array.from(document.getElementsByClassName("square"));
    
    const wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    wins.forEach((i) => {
        if ((square[i[0]].innerText === square[i[1]].innerText) && (square[i[1]].innerText === square[i[2]].innerText) && (square[i[0]].innerText !== "")) {
            console.log(`${square[i[0]].innerText} Wins`);
            startPara.innerText = square[i[0]].innerText + " Wins";
            gameover = true;
            celebration(square[i[0]].innerText);
        }

        const isTie = square.every(sq => sq.innerText !== "");
        if (isTie) {
            console.log("It's a Tie");
            gameover = true;
            declareTie();
        }
    })
};

const boxes = Array.from(document.getElementsByClassName("square"));

boxes.forEach((box, idx) => {
    box.addEventListener('click', () => {
        if (box.innerText === "") {
            box.innerText = turn;
            console.log(turn, "Entered to", idx+1, "box");
            turn = changeTurn();
            checkWin();
            if (!gameover) {
                document.querySelector(".info p").innerText = `Turn for ${turn}`;
            }
        }
    })

})



const reset = document.getElementById("Reset");

reset.addEventListener('click', () => {
    const square = Array.from(document.getElementsByClassName("square"));
    const restartPara = document.querySelector(".info p");

    square.forEach(el => {
        el.innerText = "";
    })
    document.querySelector(".resultBoard").classList.remove("modResBoard");
    restartPara.innerText = "Start Play";
    restartPara.setAttribute('style', 'font-size: 35px');
    gameover = false;
    const timeout = setTimeout(() => {
        console.log("Play Started");
        restartPara.innerText = "Turn for X";
        restartPara.setAttribute('style', 'font-size: 25px');
    }, 1000)
})