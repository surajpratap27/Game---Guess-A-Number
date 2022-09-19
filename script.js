'use strict';
let guess = Number(Math.floor(Math.random() * 20)+1);
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener('click', () => {

    let inputNumber = Number(document.querySelector('.guess').value);
    if (inputNumber == '') {
        document.querySelector('.message').textContent = "😒 Enter a number"
    }
    else if (inputNumber == guess) {
        document.querySelector('.message').textContent = "🎉 Correct Answer!!!"
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').textContent = guess   
        document.querySelector('.number').style.width='30rem'
        if (score >= highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    else if (inputNumber < guess) {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "📉 Too Low";
        if(score<1)
        {
            document.querySelector('.message').textContent = "🤯 You Lost"
            document.querySelector('body').style.backgroundColor = '#c46067'
            document.querySelector('.score').textContent=0
            document.querySelector('.check').disabled=true
        }
    }
    else {
        score--;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent = "📈 Too High";
        if(score<1)
        {
            document.querySelector('.message').textContent = "🤯 You Lost"
            document.querySelector('body').style.backgroundColor = '#c46067'
            document.querySelector('.score').textContent=0
            document.querySelector('.check').disabled=true

        }
    }
})


document.querySelector('.again').addEventListener('click', () => {
    guess = Number(Math.floor(Math.random() * 21)+1);
    score = 20;
    document.querySelector('.message').textContent = "Start guessing..."
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.score').textContent = score
    document.querySelector('.check').disabled=false
    document.querySelector('.number').textContent="?"
})



