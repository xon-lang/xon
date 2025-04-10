export function memoize<T extends (...args: any[]) => any>(func: T): T {
  let store: Map<string, any>;
  let instance: any;

  return function (...args: any[]): any {
    if (args.length === 0) {
      if (!instance) {
        instance = func.apply(null, args);
      }

      return instance;
    }

    store ??= new Map();

    const key = JSON.stringify(args);

    if (store.has(key)) {
      return store.get(key);
    }

    const value = func.apply(null, args);

    store.set(key, value);

    return value;
  } as T;
}
