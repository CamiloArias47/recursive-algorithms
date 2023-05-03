function superDigit(num, sum = 0) {
  if (num < 10) {
    return sum === 0 ? num : num+sum
  }
  
  sum += num % 10
  num = Math.floor(num / 10)
  return superDigit(num, sum)
}

// Ejemplo de uso:
console.log(superDigit(9875)); // Devuelve 29
console.log(superDigit(29)); // Devuelve 11
console.log(superDigit(11)); // Devuelve 2
console.log(superDigit(2)); // Devuelve 2