const timeLeft = document.querySelector('#time-left');
const scoreDisplay = document.querySelector('#score');
const squares = document.querySelectorAll('.square');

let molePosition;
let score = 0;
let currentTime = 60;
let countDownTimerId;
let moleTimerId;

function moveMole() {
    moleTimerId = setInterval(() => {
            squares.forEach(square => square.classList.remove('mole'));
            let randomSquare = squares[Math.floor(Math.random() * squares.length)];

            randomSquare.classList.add('mole');

            molePosition = randomSquare.id;
        },
        500)
}

moveMole()

squares.forEach(square => square.addEventListener('click', () => {
    if (square.id === molePosition) {
        score++;
        scoreDisplay.innerHTML = score;
    }
}))

function countDown() {
    currentTime--;
    timeLeft.innerHTML = currentTime;
    if (currentTime === 0) {
        clearInterval(countDownTimerId)
        clearInterval(moleTimerId)
    }
}

countDownTimerId = setInterval(countDown, 1000)