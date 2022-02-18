/**
 * @param {number} columnNumber
 * @return {string}
 */
 var convertToTitle = function(columnNumber) {
    var num = columnNumber;
    var tmp = 0;
    var res = '';
    while (num > 0) {
        tmp = num % 26;
        if (tmp === 0) tmp = 26;
        res = getChar(tmp) + res;
        num = (num - tmp) / 26;
      }
      return res;
  };

  var getChar = function (num) {
    var start = 'A'.charCodeAt(0);
    return String.fromCharCode(start + num - 1);
  };


  /*

  - First convert the column number to a string.
  - Then iterate through the string from the end to the beginning.
  - For each character, we convert it to its corresponding number and add it to the result.
  - If the number is greater than 26, we divide it by 26 and keep the remainder.
  - If the number is equal to 0, we make it 26.
  

  */