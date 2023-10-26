/* eslint-disable */
const iterationCount = 1_000_000_00;

const timer = function (name) {
  const start = performance.now();

  return {
    stop() {
      const end = performance.now();
      const time = end - start;
      console.log(`${name}: ${time.toFixed(2)}ms`);
    },
  };
};

console.clear();
for (let times = 0; times < 100; times++) {
  // const test1 = timer('text ');
  // for (let i = 0; i < iterationCount; i++) {
  //   const value = text[index];
  // }
  // test1.stop();


  console.log('--------------------');
}
