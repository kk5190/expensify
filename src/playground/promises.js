const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('This is resolved');
  }, 1500);
});


promise.then((data) => {
  console.log(data);
});

console.log('after');