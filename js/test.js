let text = '게임';
let time = 9;
let isPlaying = true;

const button = document.querySelector('.button');
buttonChange(text);


function buttonChange(text){
    button.innerText = text;
    text ==='게임시작' ? button.classList.remove('loading') : button.classList.add('loading')
}

function countDown(){
    time.innerText = time;
    time > 0 ? time-- : isPlaying = false;
}

function checkStatus(){
    if(!isPlaying && time === 0){
        buttonChange('게임시작');
    } 
}




