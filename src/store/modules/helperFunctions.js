export function getRandomNumFromRange(min, max) {  
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export function getResult(arg1, arg2, operation) {
  switch (operation) {
    case '-':
      return arg1 - arg2
    default:
      return arg1 + arg2
  }
}
