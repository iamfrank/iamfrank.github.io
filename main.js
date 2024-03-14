function generateRandomDelay() {
  return Math.floor(Math.random() * 6)
}

const cases = document.querySelectorAll('a.showcase')

for (let c of cases) {
  c.style.animationDelay = `${generateRandomDelay()}s`
}
