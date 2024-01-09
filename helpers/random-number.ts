function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function getRandomNumber(min: number = 0, max: number = 100, items: number = 1) {
  var randomNums = [];
  while(randomNums.length < items) {
    var num = getRandomInt(min, max);
    if(randomNums.indexOf(num) === -1) {
      randomNums.push(num);
    }
  }
  return randomNums;
}