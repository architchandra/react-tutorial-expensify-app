const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is my resolved data');
    // reject('Something went wrong');
  }, 1500)
});

// console.log('before');

// promise.then((data) => {
//   console.log(data);
// }).catch((error) => {
//   console.log('error:', error);
// });

// console.log('after');



// Promise chaining

console.log('before');

promise.then((data) => {
  console.log(data);
  return 'yoyoyo';
}).then((yo) => {
  console.log('msg', yo);
}).catch((error) => {
  console.log('error:', error);
});

console.log('after');
