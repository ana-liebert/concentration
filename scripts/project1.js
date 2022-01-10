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
let $levelMessage = $('#level');
let $nextLevel = $('.container2');


$nextLevel.hide();
$('.timerContainer').hide();


// Shuffles cards ------->



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
                    document.getElementById("clicksToWin").innerHTML = "clicks to beat level one."
                    document.getElementById("containerTwo").style.marginTop = "309px";
                    sumClicks = sumArray.slice(-1)
                    $('#clickTally').append(totalClicks); 
                }

                if (isMatch == 12) {
                
                window.clearInterval(interval);
                document.getElementById("clicksToWin").innerHTML = "clicks to beat level two."
                    sumClicks = sumArray.slice(-1)
                    $('#clickTally').text(totalClicks); 
                    
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


// Level up --------------->

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



