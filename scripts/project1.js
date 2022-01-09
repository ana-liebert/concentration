let cards = document.querySelectorAll('.card');
let choiceOne = '';
let choiceTwo = '';
let countClicks = 0;
let seconds = 0;
let isMatch = 0;
let totalClicks = 0;
let sumArray = [];


// Shuffles cards ------->

$('.timerContainer').hide();

let container = document.querySelector('.container');

for (let i = 0; i <= 12; i++) {
    container.appendChild(container.children[Math.floor(Math.random() * i)]);
}

// Reset button --------->
$(document).on('click', '#button', function() {
    window.location.reload(true);
  })

// Timer ------------>
function timer() {
    seconds ++;
    $('#timer').text(`${seconds}`);
}

interval = window.setInterval(timer, 1000);

// Show images and check for match ------->
function displayImage() {
  this.classList.add('flip');
  totalClicks ++
  console.log(totalClicks);
  
    if (countClicks == 0) {
        countClicks = 1
        choiceOne = this;
  } 
    else {
      countClicks = 0
      choiceTwo = this;
    console.log(choiceOne.dataset.name, choiceTwo.dataset.name)
        if (choiceOne.dataset.name == choiceTwo.dataset.name) {
            isMatch ++
            sumArray.push(totalClicks);
            choiceOne.removeEventListener('click', displayImage, false);
            choiceOne.removeEventListener('click', displayImage, false);
           

            if (isMatch == 6) {
                    window.clearInterval(interval);
                    $('.timerContainer').slideDown();
                    sumClicks = sumArray.slice(-1)
                    $('#clickTally').append(totalClicks); 
                }

            } else{
            setTimeout(() => {
                choiceOne.classList.remove('flip');
                choiceTwo.classList.remove('flip');
            }, 600)
        }
    }
}

cards.forEach(card => card.addEventListener('click', displayImage));



// let $button = $('#duplicate')
// $button.on('click', duplicate);

// let $containerDuplicate = $('.container')

// function duplicate() {
//     newBoard = $containerDuplicate.clone(true, true);
//     $(newBoard).insertAfter('.container:last');
//     console.log(newBoard);
// }


// let clone = ''
// let containerDuplicate = document.querySelector('.container');
// let duplicateButton = document.querySelector('#duplicate');


// duplicateButton.addEventListener('click', function() {
//     let clone = containerDuplicate.cloneNode(true);
//     containerDuplicate.after(clone);
//     containerDuplicate.after(clone);

//     cards.forEach(card => card.addEventListener('click', displayImage));

// })

