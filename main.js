function generateRandomColor() {
  return Math.floor(Math.random() * 300)
}

const cases = document.querySelectorAll('a.showcase')

for (let c of cases) {
  console.log('case!', c)
  c.style.backgroundColor = `hsl(${generateRandomColor()},80%,40%)`
}