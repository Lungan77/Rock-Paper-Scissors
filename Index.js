const yourChoice = document.getElementById('your_Choice')
const computerChoice = document.getElementById('computer_Choice')
const results = document.getElementById('Results')
const possibleChoice = document.querySelectorAll('button')
let your_Choice
let computer_Choice
let Results

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    your_Choice = e.target.value
    yourChoice.innerHTML = your_Choice
    generateComputerChoice()
    generateResults()
}))

const generateComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    switch(randomNumber){
        case 1:
            computer_Choice = 'Rock'
        break
        
        case 2:
            computer_Choice = 'Paper' 
        break

        case 3:
            computer_Choice = 'Scissors' 
        break
    }

    computerChoice.innerHTML = computer_Choice
}

const generateResults = () => {
    if (computer_Choice == your_Choice){
        Results = 'It a Draw'
    }

    if (computer_Choice == 'Rock' && your_Choice == 'Paper'){
        Results = 'You Win'
    } 

    if (computer_Choice == 'Rock' && your_Choice == 'Scissors'){
        Results = 'You lost'
    } 

    if (computer_Choice == 'Scissors' && your_Choice == 'Rock'){
        Results = 'You Win'
    } 

    if (computer_Choice == 'Scissors' && your_Choice == 'Paper'){
        Results = 'You lost'
    } 

    if (computer_Choice == 'Paper' && your_Choice == 'Rock'){
        Results = 'You lost'
    } 

    if (computer_Choice == 'Paper' && your_Choice == 'Scissors'){
        Results = 'You Win'
    } 

    results.innerHTML = Results
}