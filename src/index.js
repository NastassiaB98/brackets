module.exports = function check(str, bracketsConfig) {

  let stack = [];

  let counter = 0;


  for (let i = 0; i < str.length; i++) {

    for (let k = 0; k < bracketsConfig.length; k++) {
      for (let j = 0; j < bracketsConfig[k].length; j++) {
        if (str[i] === bracketsConfig[k][j]) {
          let bracketsIndex = k * 10 + j;

          if (bracketsConfig[k][0] === bracketsConfig[k][1]) {
            if (counter === 0) {
              stack.push(str[i]);
              counter = 1;
            } else {
              counter = 0;
              if (stack.pop() != str[i]) {
                return false;
              }


            }
          } else {

            if (bracketsIndex % 2 === 0) {
              stack.push(bracketsIndex + 1);
            } else if (bracketsIndex != stack.pop()) {
              return false;
            }
          }
        }
      }
    }
  }



  return stack.length === 0;
}
