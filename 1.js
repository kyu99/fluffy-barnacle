function getMoneyChange(money) {
    var listKey = []
    for (key in moneyStocks) {
        listKey.push(Number(key))
    }

    var moneyTotal = 0
    for (var i = 0; i < listKey.length; i++) {
        moneyTotal += (listKey[i] * moneyStocks[`${listKey[i]}`])
    }

    var hasil = []
    if (money <= moneyTotal && money > 500) {
        for (var i = listKey.length-1; i >= 0; i--) {
            if (moneyStocks[`${listKey[i]}`] !== 0) {
                if (money >= listKey[i]) {
                    var pecahan = Math.floor(money/listKey[i])
                    if (pecahan <= moneyStocks[`${listKey[i]}`]) {
                        hasil.push(`${listKey[i]} ${pecahan} lembar`)
                        money -= listKey[i] * pecahan
                        moneyStocks[`${listKey[i]}`] -= pecahan
                    } else if (pecahan > moneyStocks[`${listKey[i]}`]) {
                        hasil.push(`${listKey[i]} ${moneyStocks[`${listKey[i]}`]} lembar`)
                        money -= listKey[i] * moneyStocks[`${listKey[i]}`]
                        moneyStocks[`${listKey[i]}`] = 0
                    }
                }
            }
        }
    } else {
        hasil.push(`Maaf uang kembalian tidak cukup`)
    }
    
    for (var i = 0; i < hasil.length; i++) {
        console.log(hasil[i])
    }
    console.log(``)
}

const moneyStocks = {
  100000: 1,
  50000: 2,
  20000: 4,
  10000: 5,
  5000: 5,
  1000: 10,
  500: 5
}

getMoneyChange(75000)
/*
  50000 1 lembar
  20000 1 lembar
  5000 1 lembar
*/

getMoneyChange(190000)
/*
  100000 1 lembar
  50000 1 lembar
  20000 2 lembar
*/

getMoneyChange(190000)
/*
  Maaf uang kembalian tidak cukup
*/

getMoneyChange(100000)
/*
  20000 1 lembar
  10000 5 lembar
  5000 4 lembar
  1000 10 lembar
*/

getMoneyChange(400)
/*
  Maaf uang kembalian tidak cukup
*/

console.log(moneyStocks)
/*
{ '500': 5,
  '1000': 0,
  '5000': 0,
  '10000': 0,
  '20000': 0,
  '50000': 0,
  '100000': 0 }
*/