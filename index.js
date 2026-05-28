const heading = document.querySelector('h1')
function diceGame() {
    let dice1 = "./images/dice1.png"
    let dice2 = "./images/dice2.png"
    let dice3 = "./images/dice3.png"
    let dice4 = "./images/dice4.png"
    let dice5 = "./images/dice5.png"
    let dice6 = "./images/dice6.png"

    const player1 = ["./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png"
    ]

    const pic = document.querySelector('.P1img1')
    let randomIndex = Math.floor(Math.random() * 6);

    pic.src = player1[randomIndex];
    let first = pic.src

    const player2 = ["./images/dice1.png",
        "./images/dice2.png",
        "./images/dice3.png",
        "./images/dice4.png",
        "./images/dice5.png",
        "./images/dice6.png"
    ]

    const pic2 = document.querySelector('.P1img2')
    let randomIndex2 = Math.floor(Math.random() * 6);

    pic2.src = player2[randomIndex2];
    let second = pic2.src;

    if (randomIndex === randomIndex2) {
        heading.textContent = "It's a tie" ;
    }
    else if (randomIndex > randomIndex2) {
        heading.textContent = "Player 1 wins";
    }
    else {
        heading.textContent = "Player 2 wins";
    }

}

heading.addEventListener("click", diceGame);