module.exports = function check(str, bracketsConfig) {
  let openingBrackets = [];
  let closingBrackets = [];
  let sameBrackets = [];
  let utilityArray = [];

bracketsConfig.forEach(function(element) {
    if (element[0] === element[1]) {
        sameBrackets.push(element[0]);
    }
    else {
        openingBrackets.push(element[0]);
        closingBrackets.push(element[1]);
    }
})

for (let i = 0; i < str.length; i++) {
    if (openingBrackets.includes(str[i])) {
        utilityArray.push(str[i]);
    }
    else if (closingBrackets.includes(str[i])) {
        if(closingBrackets.indexOf(str[i]) === openingBrackets.indexOf(utilityArray[utilityArray.length - 1])) {
            utilityArray.pop();
        }
        else {
            utilityArray.push(str[i]);
        }
    }
    else if (sameBrackets.includes(str[i])) {
        if (str[i] === utilityArray[utilityArray.length - 1]) {
            utilityArray.pop();
        }
        else {
            utilityArray.push(str[i]);
        }
    }
}

return utilityArray.length === 0;
}