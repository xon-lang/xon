const iterationCount = 1_000_000_00;
const text = '_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
const array = Array.from(text);
let index = 0;


const next = function(index) {
  return array[index++];
};

const timer = function(name) {
  const start = performance.now();

  return {
    stop() {
      const end = performance.now(); ;
      const time = end - start;
      console.log(`${name}: ${time.toFixed(2)}ms`);
    },
  };
};

console.clear();
for (let times = 0; times < 100; times++) {
  if (index > array.length - 1) {
    index = 0;
  }
  const test1 = timer('text ');
  for (let i = 0; i < iterationCount; i++) {
    const value = text[index];
  }
  test1.stop();

  const test2 = timer('array');
  for (let i = 0; i < iterationCount; i++) {
    const value = array[index];
  }
  test2.stop();

  const test3 = timer('next ');
  for (let i = 0; i < iterationCount; i++) {
    const value = next(index);
  }
  test3.stop();

  const char = array[index];
  const test4 = timer('char ');
  for (let i = 0; i < iterationCount; i++) {
    const value = char;
  }
  test4.stop();
  console.log('--------------------');
}
