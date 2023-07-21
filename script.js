let response = ''
const data = []

async function getData() {
    const request = await fetch('./data.json')
    response = await request.json()
    console.log(response[0]['timeframes']['monthly'])
}
async function render() {
    await getData()
    // document.querySelector('p').textContent += response[2]['title']
}
render()

const day = document.querySelector('.card:first-child .front div:nth-of-type(1) label')
const week = document.querySelector('.card:first-child .front div:nth-child(2) label')
const month = document.querySelector('.card:first-child .front div:last-of-type label')

const current = document.querySelectorAll('.time')
const last = document.querySelectorAll('.last')



day.addEventListener('click', dayFun)
week.addEventListener('click', weekFun)
month.addEventListener('click', monthFun)

function dayFun(e) {
    current.forEach(card => card.textContent = `${response[card.dataset.current]['timeframes']['daily']['current']}hrs`)
    last.forEach(card => card.textContent = `Last Week - ${response[card.dataset.last]['timeframes']['daily']['previous']}hrs`)
}
function weekFun(e) {
    current.forEach(card => card.textContent = `${response[card.dataset.current]['timeframes']['weekly']['current']}hrs`)
    last.forEach(card => card.textContent = `Last Week - ${response[card.dataset.last]['timeframes']['weekly']['previous']}hrs`)
}
function monthFun(e) {
    current.forEach(card => card.textContent = `${response[card.dataset.current]['timeframes']['monthly']['current']}hrs`)
    last.forEach(card => card.textContent = `Last Week - ${response[card.dataset.last]['timeframes']['monthly']['previous']}hrs`)
}


