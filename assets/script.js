// Notes: I could improbe this drastically by adding functions, 
// but honestly I'm too lazy, and dont care about maintainibilty


// Set some intial vars for the buttons
let pennyFlipBtn = document.querySelector("#flip");
let clearScoreBtn = document.querySelector("#clear");

// Set the inital vars for the values
let clickCount = 0;
let headsCount = 0;
let tailsCount = 0;
let percentageHeads = 0
let percentageTails = 0

// If values exist in local storage, set them here
if(localStorage.getItem('headsCount') !== null){
    headsCount = parseInt(localStorage.getItem('headsCount'));
    percentageHeads = parseInt(localStorage.getItem('percentHeads'));
    document.querySelector('.percentHeads').textContent = percentageHeads + '%';
    document.querySelector('.heads-counter').textContent = headsCount;
    // document.querySelector('#message-header').textContent = "Hey! You've been here before!";
}

if(localStorage.getItem('tailsCount') !== null){
    tailsCount = parseInt(localStorage.getItem('tailsCount'));
    percentageTails = parseInt(localStorage.getItem('percentTails'));
    document.querySelector('.percentageTails').textContent = percentageTails + '%';
    document.querySelector('.tails-counter').textContent = tailsCount;
}

// Button that flips the penny
pennyFlipBtn.addEventListener('click', function(){
    let isHeads = Math.random() < 0.5;
    clickCount++;

    // Updating DOM if the result is heads
    if (isHeads){
        console.log('heads!');
        document.querySelector('img');
        document.querySelector('img').src = './assets/images/penny-heads.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Heads!'
        headsCount++;
    }

    // Update DOM if the results is tails
    else{
        console.log('tails');
        document.querySelector('img').src = './assets/images/penny-tails.jpg';
        document.querySelector('#message-header').textContent = 'You Flipped Tails!'
        tailsCount++;
    }

    // Calculate the percentages
    percentageHeads = Math.round((headsCount / clickCount) * 100);
    percentageTails = Math.round((tailsCount / clickCount) * 100);

    // Save all the values to local storage
    localStorage.setItem('percentHeads', percentageHeads);
    localStorage.setItem('percentTails', percentageTails);
    localStorage.setItem('headsCount', headsCount);
    localStorage.setItem('tailsCount', tailsCount);
    localStorage.setItem('clickCount', clickCount);

    // Display the values on screen
    document.querySelector('.heads-counter').textContent = headsCount;
    document.querySelector('.tails-counter').textContent = tailsCount;
    document.querySelector('.percentHeads').textContent = percentageHeads + '%';
    document.querySelector('.percentageTails').textContent = percentageTails + '%';
});

// Function to clear the board
clearScoreBtn.addEventListener('click', function(){
    // Reset the vars
    clickCount = 0;
    headsCount = 0;
    tailsCount = 0;
    percentageHeads = 0;
    percentageTails = 0;

    // Update local storage
    localStorage.setItem('clickCount', clickCount)
    localStorage.setItem('headsCount', headsCount)
    localStorage.setItem('tailsCount', tailsCount)
    localStorage.setItem('percentHeads', percentageHeads);
    localStorage.setItem('percentTails', percentageTails);

    // Display changes to the screen
    document.querySelector('#message-header').textContent = 'Scoreboard Reset!'
    document.querySelector('.heads-counter').textContent = headsCount;
    document.querySelector('.tails-counter').textContent = tailsCount;
    document.querySelector('.percentHeads').textContent = '0' + '%';
    document.querySelector('.percentageTails').textContent = '0' + '%';
});