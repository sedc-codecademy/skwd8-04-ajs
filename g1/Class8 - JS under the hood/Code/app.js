// console.log('Loaded');

// setTimeout(() => console.log('set timeout executed'), 0);

// console.log('after timeout');
// count = 0;
// setInterval(() => console.log(`Hi there! ${count++}`), 1000);

// let cb1 = () => console.log('cb1');

// console.log('Hi');
// setTimeout(cb1, 1000);
// console.log('Bye');

function first() {
  second();
  console.log('first');
}

function second() {
  console.log('second!');
}

first();
