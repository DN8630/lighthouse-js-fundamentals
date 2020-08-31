const isEven = function(num)
{
  return num % 2 == 0;
}

const tenIsEven = isEven(10);
const elevenISEven = isEven(11);

console.log(tenIsEven);
console.log(elevenISEven);
// Direct output without setting function result to a variable
console.log(isEven(10));
console.log(isEven(11));