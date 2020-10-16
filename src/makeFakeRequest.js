function makeFakeRequest() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve('Success!');
      } else {
        reject('Failure');
      }
    }, 500);
  });
}

export default makeFakeRequest;
