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


const a = 'abc'
const b = Array.from('abc').map(x=>x.charCodeAt(0))

let aa = null
let bb = null


console.clear();
for (let times = 0; times < 10; times++) {
  const test1 = timer('a ');
  for (let i = 0; i < iterationCount; i++) {
   aa= a[1]
  }
  test1.stop();
  
  const test2 = timer('b ');
  for (let i = 0; i < iterationCount; i++) {
   bb= b[1]
  }
  test2.stop();


  console.log('--------------------');
}
