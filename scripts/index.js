function Bank (costumer, balance, amount, withdraw) {
  this.costumer = costumer
  this.balance = balance
  this.amount = amount
  this.withdraw = withdraw

  this.currentcostumer = {
    account: 0
  }

  this.printAccount = function () {
    return `${this.costumer}'s new balance is ${this.balance}`
  }

  this.deposit = function () {
    return `${this.costumer}'s new balance is ${balance + this.amount}`
  }

  this.withdraw = function (withdraw) {
    if (this.balance < this.withdraw) {
      alert('Warning! Insuficient funds!')
    } else {
      console.log(`${this.costumer}'s new balance is ${balance - withdraw}`)
    }
  }
}
const newBank = new Bank('sheldon')
console.log(newBank.costumer)

const newBank1 = new Bank('sheldon', 0)
console.log(newBank1.printAccount())

const newBank2 = new Bank('sheldon', 0, 5)
console.log(newBank2.deposit())

const newBank3 = new Bank('sheldon', 0, 0)
console.log(newBank3.withdraw())
