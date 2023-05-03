function sumPower(x, n, currNum = 1) {
    const currNumPow = Math.pow(currNum, n);
    if (currNumPow > x) return 0;
    if (currNumPow === x) return 1;
    
    const waysWithoutCurrNum = sumPower(x, n, currNum + 1);
    const waysWithCurrNum = sumPower(x - currNumPow, n, currNum + 1);
    
    return waysWithoutCurrNum + waysWithCurrNum;
  }

  console.log(sumPower(13, 2))
  console.log(sumPower(10, 2))
  console.log(sumPower(20, 2))
  console.log(sumPower(30, 2))
  console.log(sumPower(40, 2))
  console.log(sumPower(50, 2))
  console.log(sumPower(60, 2))

