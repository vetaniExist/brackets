module.exports = function check(str, bracketsConfig) {
  if (str.length % 2 !== 0) {
    return false;
  }

  let openBracketsCounter = 0;
  let closeBracketsCounter = 0;
  let aBrackets = [];

  for (let i = 0; i < str.length; i += 1) {
    for( let j = 0; j < bracketsConfig.length; j += 1) {
      if (str[i] === bracketsConfig[j][0]) {
        if (bracketsConfig[j][0] === bracketsConfig[j][1]) {
          if (openBracketsCounter === closeBracketsCounter) {
            aBrackets.push(str[i]);
            openBracketsCounter += 1;
          } else if (aBrackets[aBrackets.length - 1] === bracketsConfig[j][0]){
            aBrackets.pop();
            closeBracketsCounter += 1;
          }
          else {
            aBrackets.push(str[i]);
            openBracketsCounter += 1;
          }

        } else {
          aBrackets.push(str[i]);
          openBracketsCounter += 1;
        }
      } else if (str[i] === bracketsConfig[j][1]) {
        if (aBrackets[aBrackets.length - 1] === bracketsConfig[j][0]) {
          aBrackets.pop();
          closeBracketsCounter += 1;
        } 
      }
    }
  }
  return aBrackets.length === 0;
}
