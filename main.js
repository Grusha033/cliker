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


let count = 1000000
let farmcount = 0
let price = 100
let priceTwoUp = 140
let clickUp = 1

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
}, 1000)