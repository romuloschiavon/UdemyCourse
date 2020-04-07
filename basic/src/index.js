//const name = "Rômulo Schiavon";
//const time = 2;

//console.log(`My name is ${name} and I'm learning JS at ${time} past midnight`);

/* 
  * So basically all the classes I took so far only taugh me things I already knew, like the diferrence between let, const and basic usage like strings
  numbers, boolean, counters, increments, decrements and I didn't wrote them all in the code, this course is only to strengh my base and help me build my 
  advanced knowledge, so far the course helped me answer a few questions I had. And learn a few basic things I didn't knew (that is always good to learn)
  so if I didn't wrote a lot so far is because of that!
*/

//const confirmation = window.confirm('Do you really want to delete this reserve?');
//if (confirmation == false){
  console.log('Nope')
//} else
  console.log('Yeah')

console.log('HEYO')

// You can catch the boolean of a window.confirm(), but a window.alert() will return the value: undefined, as default

const n1 = Number(window.prompt('Type a number'));
const n2 = Number(window.prompt('Type another number'))

const sum = (n1, n2) => {
  const res = n1 + n2;
  return document.body.innerHTML += `<br />The result of your sum is:${res} <br />`;
};

const subt = (n1, n2) => {
  const res = n1 - n2;
  return document.body.innerHTML += `<br />The result of your subtraction is:${res} <br />`;
};

const mult = (n1, n2) => {
  const res = n1 * n2;
  return document.body.innerHTML += `<br />The result of your multiplication is:${res} <br />`;
};

const divis = (n1, n2) => {
  if (n2 !== 0){
    const res = n1 / n2;
    return document.body.innerHTML += `<br />The result of your division is:${res} <br />`;
  }else {
    const res = alert("n2 should be different than 0");
    return res;
  };
};

const pow = (n1, n2) => {
  const res = (n1 ** n2);
  return document.body.innerHTML += `<br />The result of your power is:${res} <br />`;
};