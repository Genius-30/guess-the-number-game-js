let randomNumber = parseInt((Math.random() * 100 ) + 1) 
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const result = document.querySelector('#result');
const newGameBtn = document.querySelector('button');
let hasClicked = false;
let options = [];

function generateOptions() {
    options = []
    for (let index = 0; index < 4; index++) {
        let option = Math.floor((Math.random() * 100) + 1);
        while (options.includes(option)) {
            option = Math.floor((Math.random() * 100) + 1);
        }
        options.push(option);
    }
}

function handleClick(option, number) {
    option.textContent = number;
    option.addEventListener('click', function () {
        if (!hasClicked) {
            if (option.textContent == randomNumber) {
                result.textContent = `You're correct! Number is ${randomNumber}`;
                option.style.backgroundColor = '#00dd00';
            } else {
                result.textContent = `Almost there! Number is ${randomNumber}`;
                option.style.backgroundColor = 'gray';
                
                const correctIndex = options.indexOf(randomNumber);
                switch(correctIndex) {
                    case 0:
                        option1.style.backgroundColor = '#00dd00';
                        break;
                    case 1:
                        option2.style.backgroundColor = '#00dd00';
                        break;
                    case 2:
                        option3.style.backgroundColor = '#00dd00';
                        break;
                    case 3:
                        option4.style.backgroundColor = '#00dd00';
                        break;
                }
            }

            hasClicked = true;
        }
    });
}

generateOptions();
let randomIndex = Math.floor(Math.random() * 4);
options[randomIndex] = randomNumber;

handleClick(option1, options[0]);
handleClick(option2, options[1]);
handleClick(option3, options[2]);
handleClick(option4, options[3]);

function startNewGame() {
    hasClicked = false;
    result.textContent = `Select a Number!`;
    randomNumber = parseInt((Math.random() * 100) + 1);
    generateOptions();
    randomIndex = Math.floor(Math.random() * 4);
    options[randomIndex] = randomNumber;
    option1.textContent = options[0];
    option2.textContent = options[1];
    option3.textContent = options[2];
    option4.textContent = options[3];
    option1.style.backgroundColor = '#080808';
    option2.style.backgroundColor = '#080808';
    option3.style.backgroundColor = '#080808';
    option4.style.backgroundColor = '#080808';
}

newGameBtn.addEventListener('click', startNewGame);
