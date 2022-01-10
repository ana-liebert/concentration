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
let $button = $('#duplicate');
let button = document.getElementById('#duplicate');
let $levelNumber = $('#level').text();
let $levelMessage = $('#level');


console.log($levelNumber);
console.log($levelNumber.includes('level'));
console.log($levelNumber.includes('2'));

let $nextLevel = $('.container2');
$nextLevel.hide();



// Shuffles cards ------->

$('.timerContainer').hide();



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

                if (isMatch == 12) {
                alert('level 2 complete');
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




$button.on('click', duplicate);


function duplicate() {
    
    $nextLevel.show();
    $levelMessage.text('Level 2');
    container.classList.add('levelUp');
    container2.classList.add('levelUp');
    

    for (let i = 0; i <= 12; i++) {

                container.appendChild(container2.children[Math.floor(Math.random() * i)]);
                container2.appendChild(container.children[Math.floor(Math.random() * i)]);
    }


}



//LEVEL UP 
//things im doing- adding different class list to all second container, duplicating the click event for those cards, then creating a new function looking for 12 matches

