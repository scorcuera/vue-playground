function firstNonRepeatingLetter(s) {
  let letterCounter = {}
  let firstNonRepeatedLetter = ''

  let letters = s.split('')
  console.log(letters)

  for (let letter of letters) {
    if (letterCounter[letter.toLowerCase()] || letterCounter[letter.toUpperCase()]) {
      let existingLetter = Object.keys(letterCounter).find(
        (element) => element.toLowerCase() === letter || element.toUpperCase() === letter
      )
      console.log(existingLetter)
      letterCounter[existingLetter] += 1
    } else if (!letterCounter[letter]) {
      letterCounter[letter] = 1
    }
  }
  console.log(letterCounter)

  for (let letter in letterCounter) {
    if (letterCounter[letter] === 1) {
      firstNonRepeatedLetter = letter
      return firstNonRepeatedLetter
    }
  }

  return ''

  // mirar debugger paso a paso; está introduciendo la última S mayúscula
}

firstNonRepeatingLetter('sTreSS')
