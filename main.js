const clickbutton = document.getElementById('clickbutton')
const money = document.getElementById('clickcounter')
const plus = document.getElementById('plusone')
const mation = document.getElementById('topmationjs')
const farm = document.getElementById('autofarm')
const shop = document.getElementById('shopLabel')
const cart = document.getElementById('cart')
const buy = document.getElementById('buybtnone')
const err = document.getElementById('errMoney')
const priceup = document.getElementById('price')
const farmplus = document.getElementById('farmplus')
const clickup = document.getElementById('clickup')
const buyTwo = document.getElementById('buybtntwo')
const priceTwo = document.getElementById('priceTwo')
const remove = document.getElementById('remove')
const removetabl = document.getElementById('delid')
const yes = document.getElementById('yes')
const no = document.getElementById('no')

let storageMoney = localStorage.getItem('money')
let storageEscalator = localStorage.getItem('eskalator')
let storageClicks = localStorage.getItem('clickscounts')
let storageOnePrice = localStorage.getItem('tovarONEprice')
let storageTWOPrice = localStorage.getItem('tovarTWOprice')

farm.textContent = parseInt(storageEscalator)
clickup.textContent = parseInt(storageClicks)
plus.textContent = ('+' + parseInt(storageClicks))
priceup.textContent = ('Цена: ' + parseInt(storageOnePrice))
priceTwo.textContent = ('Цена: ' + parseInt(storageTWOPrice))

let count = parseInt(storageMoney)
let farmcount = parseInt(storageEscalator)
let price = parseInt(storageOnePrice)
let priceTwoUp = parseInt(storageTWOPrice)
let clickUp = parseInt(storageClicks)

removetabl.style.left = '30000px'

if (isNaN(count)) {
    count = 0
}
if (isNaN(farmcount)) {
    farmcount = 0
    farm.textContent = 0
}
if (isNaN(clickUp)) {
    clickUp = 1
    clickup.textContent = 1
    plus.textContent = ('+1')
}
if (isNaN(price)) {
    price = 80
    priceup.textContent = ('Цена: 80')
}
if (isNaN(priceTwoUp)) {
    priceTwoUp = 90
    priceTwo.textContent = ('Цена: 90')
}

money.textContent = count
shop.style.left = '30000px'

clickbutton.onclick = () => {
    mation.style.top = '100px'
}

clickbutton.onclick = () => {
    money.textContent = (Math.round(count += clickUp))
    plus.style.opacity = '100%'
    mation.style.top = '100px'

    setTimeout ( () => {
        plus.style.opacity = '0%'
        mation.style.top = '90px'
    }, 300)
}

cart.onclick = () => {
    if (shop.style.left === '30000px') {
        shop.style.left = ''
    } else {
        shop.style.left = '30000px'
    }
}

buy.onclick = () => {
    if (count >= price ) {
        money.textContent = (Math.round(count -= price))
        farm.textContent = (farmcount += 1)
        priceup.textContent = ('Цена: ' + (Math.round(price *= 1.1)))
    } else {
        err.style.opacity = '100%'
        err.style.top = '590px'
        setTimeout ( () => {
            err.style.opacity = '0%'
            err.style.top = '600px'
        }, 700)
    }
}

buyTwo.onclick = () => {
    if (count >= priceTwoUp) {
        money.textContent = (Math.round(count -= priceTwoUp))
        clickup.textContent = (clickUp += 1)
        priceTwo.textContent = ('Цена: ' + (Math.round(priceTwoUp *= 1.12)))
        plus.textContent = ('+' + clickUp)
    } else {
        err.style.opacity = '100%'
        err.style.top = '590px'
        setTimeout ( () => {
            err.style.opacity = '0%'
            err.style.top = '600px'
        }, 700)
    }
}

setInterval ( () => {
    if (farmcount > 0) {
        money.textContent = (Math.round(count += farmcount))
        farmplus.textContent = ('+' + farmcount)
        farmplus.style.opacity = "100%"
        farmplus.style.top = "383px"
        setTimeout ( () => {
            farmplus.style.top = "386px"
            farmplus.style.opacity = "0%"
        },300)
    }
}, 800)

setInterval ( () => {
    localStorage.setItem('money', Math.round(count))
    localStorage.setItem('eskalator', Math.round(farmcount))
    localStorage.setItem('clickscounts', Math.round(clickUp))

    localStorage.setItem('tovarONEprice', Math.round(price))
    localStorage.setItem('tovarTWOprice', Math.round(priceTwoUp))
}, 100)

remove.onclick = () => {
    if (removetabl.style.left === '30000px') {
        removetabl.style.left = '90px'
    } else {
        removetabl.style.left = '30000px'
    }
} 

no.onclick = () => {
    removetabl.style.left = '30000px'
}
yes.onclick = () => {
    localStorage.clear()
    location.reload()
}
