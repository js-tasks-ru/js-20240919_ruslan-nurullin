/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  if (size === undefined) {
    return string;
  }
  let result = '';
  let currentSymbol = '';
  let currentCount = 0;

  for (let i = 0; i < string.length; i++) {
    const symbol = string[i];

    if (symbol === currentSymbol) {
      currentCount++;
    } else {
      currentSymbol = symbol;
      currentCount = 1;
    }

    if (currentCount <= size) {
      result += symbol;
    } else {     
      continue;
    }
  }  
    return result;
}
