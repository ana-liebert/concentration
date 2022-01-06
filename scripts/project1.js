let choices = ["A", "A", "B", "B", "C", "C", "D", "D", "E", "E", "F", "F"]
let randIndex = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
let randomIndex = []
let shuffledArray = []
let $card = $('.card')
let cards = [...$card];
let seconds = 0;
let minutes = 0;
let hours = 0;
let interval = null;
let countClicks = 0
let choiceOne = ''
let choiceTwo = ''
let choiceOneIndex = ''
let choiceTwoIndex = ''
let isMatch = 0
let totalClicks = 0
let $images = $('.image');
let imageChoice = ['images/alien1.png', 'images/alien1.png', 'images/alien2.png', 'images/alien2.png', 'images/alien3.png', 'images/alien3.png', 'images/alien4.png', 'images/alien4.png', 'images/alien5.png', 'images/alien5.png', 'images/alien6.png', 'images/alien6.png'];
let sortedImages = []



$('.timerContainer').hide()

imageChoice.sort (function(a, b) {
    return 0.5 - Math.random()});
//console.log(imageChoice); 

let imageArray = document.querySelectorAll('.image');

function shuffleInImage() {
    for(let i = 0; i < cards.length; i ++) {
    let img = document.createElement('img');
    //console.log(imageChoice[i]);
    img.src = imageChoice[i];
    img.width = "15px";
    img.height = "15px";
    img.style.margin = "15px";
    // console.log(img.src); normal, THIS IS TWELEVE SRCS
    //console.log(i); //normal, index of 11
    // console.log(imageArray); //normal, array of 12 divs
    //console.log(imageArray[i]); //doesnt assign to all divs- why??
    imageArray[i].innerHTML=(`<img src="${img.src}">`);
    $images.hide();
    //console.log(imageArray[i].innerHTML);
} 
}

shuffleInImage();


function stopWatch() {
    seconds ++;
    if (seconds / 60 === 1) {
        seconds = 0;
        minutes ++;
        if( minutes / 60 === 1) {
            minutes = 0;
            hours ++;
        }
        // if(seconds < 10 || minutes < 10 || hours < 10) {
        // $('#timer').text(`0${hours}:0${minutes}:0${seconds}`);
        // } else if (seconds > 10 || minutes > 10 || hours > 10) {
        //     $('#timer').text(`${hours}:${minutes}:${seconds}`);
        // }
    } $('#timer').text(`${hours}:${minutes}:${seconds}`);
}

interval = window.setInterval(stopWatch, 1000);

//window.addEventListener('load', shuffleInImage());

setInterval(displayCard(), 2000);

for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener('click', function displayCard(event) {
        target = $(event.target); 
        target.children().show()
        countClicks ++
        totalClicks = totalClicks + 1
        $('.tally').append(totalClicks);
        

        if (countClicks == 1) {
            choiceOne = target.children().html();
            choiceOneIndex = i;
            target.children().show()
           // console.log(countClicks);
        } else {
            choiceTwo = target.children().html();
            choiceTwoIndex = i; //NOTE FOR FUTURE REFERENCE - AN ARRAY CANNOT EQUAL AN ARRAY- [i] WAS COMPARING TWO ARRAYS AND NOT GRABBING THE ACTUAL NUMBER
            countClicks = 0;
            target.children().show()
           // console.log(countClicks);

        }

        console.log(choiceOne);
        console.log(choiceTwo);
        console.log(choiceOneIndex, choiceTwoIndex);
    
        if ( (choiceOne == choiceTwo || choiceTwo == choiceOne) && (choiceOneIndex !== choiceTwoIndex && choiceTwoIndex !== choiceOneIndex) ) {
           
                isMatch ++
                event.target.removeEventListener("click", displayCard, false);
                    
                if (isMatch == 12) {
                        alert('Finished!')
                        window.clearInterval(interval);
                        $('.timerContainer').show()
                    }
            } 
    
        else {
            target.children().fadeOut()
        }
    } )
}





// function shuffle() {
//     for (let index = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12], 
//         i = (index.length - 1); i--; ) {
//             let random = index.splice(Math.floor(Math.random() * (i + 1)), 1)[0];
//             randomIndex.push(random)
//         } 
//         for (let i = 0; i < randomIndex.length; i++) {
//             options = randomIndex[i] 
//             value = choices[options] 
//             shuffledArray.push(value) 
//         }
     
//         $('#one').text(shuffledArray[0])
//         $('#two').text(shuffledArray[1]);
//         $('#three').text(shuffledArray[2]);
//         $('#four').text(shuffledArray[3]);
//         $('#five').text(shuffledArray[4]);
//         $('#six').text(shuffledArray[5]);
//         $('#seven').text(shuffledArray[6]);
//         $('#eight').text(shuffledArray[7]);
//         $('#nine').text(shuffledArray[8]);
//         $('#ten').text(shuffledArray[9]);
//         $('#eleven').text(shuffledArray[10]);
//         $('#twelve').text(shuffledArray[11]);

    
//         $('.text').hide()
//         //$images.hide();
//         //console.log(shuffledArray)
//         }