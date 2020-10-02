const img = document.querySelectorAll('img')
const winner = document.querySelector('h1')

/*User 1*/

//Generate a random number from 1 to 6
const firstRandomNum = Math.floor(Math.random()*6)+1

//images/dice1.png up to images/dice6.png
const firstDiceImage = `assets/dice${firstRandomNum}.png`

img[0].setAttribute('src', firstDiceImage)


/*User 2*/

//Generate a random number from 1 to 6
const secondRandomNum = Math.floor(Math.random()*6)+1

//images/dice1.png up to images/dice6.png
const secondDiceImage = `assets/dice${secondRandomNum}.png`

img[1].setAttribute('src', secondDiceImage)

/* Logic for winner */

if (firstRandomNum > secondRandomNum) {
    winner.innerHTML = 'The winner is User 1'
} else if (firstRandomNum < secondRandomNum) {
    winner.innerHTML = 'The winner is User 2'
}else {
    winner.innerHTML = `It's a Draw!`
}