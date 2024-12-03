function bankNotes (money) {
  const denominations = [10000, 5000, 2000, 1000, 500, 100]
  const results = {}
  money >= 0
  for (let i = 0; i < denominations.length; i++) {
    const xaf = denominations[i]
    if (money >= xaf) {
      const count = Math.floor(money / xaf)
      results[xaf] = count
      money %= xaf
    }
  }
  return results
}

const money = 23700
const output = bankNotes(money)
console.log(output)
