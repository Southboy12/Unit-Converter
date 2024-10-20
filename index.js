/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const inputEl = document.querySelector('#inputNum')
const btnEl = document.querySelector('#btn')
const lengthEl = document.querySelector('#length')
const volumeEl = document.querySelector('#volume')
const massEl = document.querySelector('#mass')



function convertNumber() {
    const inputNumber = Number(inputEl.value)

    const feet = inputNumber / 3.281
    const meter = inputNumber * 3.281

    const liter = inputNumber * 0.264
    const gallon = inputNumber / 0.264

    const kilogram = inputNumber * 2.204
    const pound = inputNumber/2.204
    
    lengthEl.textContent = `${inputNumber} meters = ${meter.toFixed(3)} feet | ${inputNumber} feet = ${feet.toFixed(3)} meters `
    volumeEl.textContent = `${inputNumber} liter = ${liter.toFixed(3)} gallons | ${inputNumber} gallon = ${gallon.toFixed(3)} liters `
    massEl.textContent = `${inputNumber} kilos = ${kilogram.toFixed(3)} pounds | ${inputNumber} pounds = ${pound.toFixed(3)} kilos `
}

btnEl.addEventListener('click', convertNumber)