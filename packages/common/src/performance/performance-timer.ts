import {Anything, Integer, Text} from '#common';

export function performanceTimer(name: Text) {
  const start = performance.now();

  return {
    stop() {
      const end = performance.now();
      const timespan = end - start;

      return {
        name,
        timespan,
      };
    },
  };
}

export function performanceIterations(
  count: Integer,
  fn: () => Anything,
): {min: Integer; max: Integer; avg: Integer} {
  let min = Infinity;
  let max = 0;
  let timespans = 0;

  // cold start
  for (let i = 0; i < 1000; i++) {
    fn();
  }

  for (let i = 0; i < count; i++) {
    const start = performance.now();

    fn();

    const stop = performance.now();
    const timespan = stop - start;

    timespans += timespan;
    min = Math.min(min, timespan);
    max = Math.max(max, timespan);
  }

  const avg = timespans / count;

  return {
    min,
    max,
    avg,
  };
}
