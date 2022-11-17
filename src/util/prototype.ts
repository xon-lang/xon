// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

// declare global {
//   interface Array<T> {
//       remove(o: T): Array<T>;
//   }
// }

export {};
declare global {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  interface Array<T> {
    filterInstance: <V>() => V[];
  }
}

// if (!Array.prototype.remove) {
//   // eslint-disable-next-line no-extend-native
//   Array.prototype.remove = <T>(arr: T[], elem: T): T[] => arr.filter((e) => e !== elem);
// }
if (!Array.prototype.filterInstance) {
  // eslint-disable-next-line no-extend-native
  Array.prototype.filterInstance = <V>(arr: unknown[]): V[] =>
    arr.filter((x) => x instanceof V).map((x) => x as V);
}
