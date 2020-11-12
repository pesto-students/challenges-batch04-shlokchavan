const allSettled = (promises) => {
  const promised = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    // eslint-disable-next-line array-callback-return
    promises.map((singlePromise) => {
      try {
        Promise.resolve(singlePromise).then(
          (res) => {
            counter += 1;
            promised.push(res);
            if (counter === promises.length) resolve(promised);
          },
        ).catch((err) => {
          counter += 1;
          promised.push(err);
          if (counter === promises.length) resolve(promised);
          reject(err);
        });
      } catch (err) {
        reject(new Error(`Error: ${err}`));
      }
    });
  });
};

export { allSettled };
