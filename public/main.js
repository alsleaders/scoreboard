let countOfTimesClickedT1 = 0
let countOfTimesClickedT2 = 0
let numberOfQuarters = 1
let periodTime = 1200

const main = () => {
  if (document.querySelector('h1.hello-world')) {
    document.querySelector('h1.hello-world').textContent = 'Hello, World!'
  }
}
// const updatedTeam1Name = () => {
//   document.getSelection
// }

// const replaceTeam1Name = () => {
//   console.log('team 1 name inserted')
//   updatedTeam1Name()
// }

const updateCounterTeam1InHtml = () => {
  document.querySelector('.team1Score').textContent = countOfTimesClickedT1
}

const updateCounterTeam2InHtml = () => {
  document.querySelector('.team2Score').textContent = countOfTimesClickedT2
}

// const updateGameTime = () => {
//    display
// }

const addOneToCountT1 = () => {
  console.log('button was clicked')
  countOfTimesClickedT1 += 1
  updateCounterTeam1InHtml()
}

const addOneToCountT2 = () => {
  console.log('button was clicked')
  countOfTimesClickedT2 += 1
  updateCounterTeam2InHtml()
}

const subtractOneFromCountT1 = () => {
  console.log('button was clicked')
  countOfTimesClickedT1 -= 1
  updateCounterTeam1InHtml()
}

const subtractOneFromCountT2 = () => {
  console.log('button was clicked')
  countOfTimesClickedT2 -= 1
  updateCounterTeam2InHtml()
}

const updateTeamOneName = () => {
  const teamName1 = document.querySelector('.team-1-new-name').value
  console.log(teamName1)
  document.querySelector('.updatedTeam1Name').textContent = teamName1
}

const updateTeamTwoName = () => {
  const teamName2 = document.querySelector('.team-2-new-name').value
  console.log(teamName2)
  document.querySelector('.updatedTeam2Name').textContent = teamName2
}

const updateQuarter = () => {
  console.log('period just ended')
  numberOfQuarters += 1
  document.querySelector('.present-quarter').textContent = numberOfQuarters
}

const startCountdown = () => {
  console.log('game started')
  periodTime -= 1
  let minutes = Math.floor(periodTime / 60)
  let seconds = periodTime % 60
  document.querySelector('.updatedClock').textContent = minutes + ':' + seconds
}

// updateGameTime()
// const periodTime = setInterval(myTimer, 1200000)
// // document.getElementById('.countdown-clock').innerHTML=

// let myVar = setInterval(myTimer, 1000)
// function myTimer() {
//   var d = new Date()
//   document.getElementById('.countdown-clock').innerHTML = d.toLocaleTimeString()
// }

// hey doc, start countdown when I hit button
// count down one second
// display the new time

document.addEventListener('DOMContentLoaded', main)
document
  .querySelector('.team-1-add-1-button')
  .addEventListener('click', addOneToCountT1)
document
  .querySelector('.team-2-add-1-button')
  .addEventListener('click', addOneToCountT2)
document
  .querySelector('.team-1-subtract-1-button')
  .addEventListener('click', subtractOneFromCountT1)
document
  .querySelector('.team-2-subtract-1-button')
  .addEventListener('click', subtractOneFromCountT2)
document
  .querySelector('.update-team-1-name')
  .addEventListener('click', updateTeamOneName)
document
  .querySelector('.update-team-2-name')
  .addEventListener('click', updateTeamTwoName)
document
  .querySelector('.quarter-tracker')
  .addEventListener('click', updateQuarter)
document.querySelector('.clock-start').addEventListener('click', startCountdown)
