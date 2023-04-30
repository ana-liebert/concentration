let cards = document.querySelectorAll('.card');
let choiceOne = '';
let choiceTwo = '';
let countClicks = 0;
let seconds = 0;
let isMatch = 0;
let totalClicks = 0;
let sumArray = [];
let container = document.querySelector('.container');
let container2 = document.querySelector('.container2');
let timerContainer = document.querySelector('.timerContainer');
let time = document.getElementById('timer');
let button = document.getElementById('button');


// Shuffles cards ------->
for (let i = 0; i <= 12; i++) {
    container.appendChild(container.children[Math.floor(Math.random() * i)]);
}

// Reset button --------->
button.addEventListener('click', function () {
    location.reload();
});

// Hide timer
timerContainer.style.display = 'none';


// Timer ------------>
function timer() {
    seconds++;
    time.innerHTML = (`${seconds}`)
}

interval = window.setInterval(timer, 1000);

// Show images and check for match ------->
function displayImage() {

    this.classList.add('flip');
    totalClicks++

    if (countClicks == 0) {
        countClicks = 1
        choiceOne = this;
    }
    else {
        countClicks = 0
        choiceTwo = this;

        if (choiceOne.dataset.name == choiceTwo.dataset.name && choiceOne !== choiceTwo) {
            isMatch++
            sumArray.push(totalClicks);
            choiceOne.removeEventListener('click', displayImage, false);
            choiceTwo.removeEventListener('click', displayImage, false);


            if (isMatch == 6) {
                window.clearInterval(interval);
                timerContainer.style.display = 'block';
                document.getElementById("clicksToWin").innerHTML = "clicks to win."
                document.getElementById("clickTally").textContent = totalClicks
            }
        }
        else {
            setTimeout(() => {
                choiceOne.classList.remove('flip');
                choiceTwo.classList.remove('flip');
            }, 600)
        }
    }
}

cards.forEach(card => card.addEventListener('click', displayImage));

