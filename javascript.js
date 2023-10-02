function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

let options = ['rock','paper','scissors'];

let result = null;
let robot_play = options[getRandomInt(3)];
let user_play = null;
let can_play = true;
console.log(robot_play)

const buttons = document.getElementsByClassName('button');

const rock = document.getElementById('rock');
rock.addEventListener("click", function(){playMove('rock')});

const paper = document.getElementById('paper');
paper.addEventListener("click", function(){playMove('paper')});

const scissors = document.getElementById('scissors');
scissors.addEventListener("click", function(){playMove('scissors')});

const score_text = document.getElementById('result-text');

function playMove(option){
    can_play = false;
    user_play = option;
    checkWin(robot_play,user_play);
}

function game(){
    result = null;
    robot_play = options[getRandomInt(3)];
    user_play = null;
    can_play = true;
    
    console.log(robot_play)
}

function checkWin(robot,user){
    switch (robot){
        case 'rock':
            switch (user){
                case 'rock':
                    result = 'tie';
                    break;
                case 'paper':
                    result = 'user';
                    break;
                case 'scissors':
                    result = 'robot';
                    break;
            }
            
            break;
        case 'paper':
            switch (user){
                case 'rock':
                    result = 'robot';
                    break;
                case 'paper':
                    result = 'tie';
                    break;
                case 'scissors':
                    result = 'user';
                    break;
            }
            break;

        case 'scissors':
            switch (user){
                case 'rock':
                    result = 'user';
                    break;
                case 'paper':
                    result = 'robot'
                    break;
                case 'scissors':
                    result = 'tie'
                    break;
            }
            break;
        
        
    }
    console.log(result)
    score_text.textContent = result;
    game();
    
}



