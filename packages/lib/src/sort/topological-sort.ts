import { String2 } from "#lib";

export function topologicalSort(dependencies: Record<String2, String2[]>): {
  order: String2[];
  cycle: String2[];
} {
  const used = new Set();
  const order: String2[] = [];
  const keys = Object.keys(dependencies);
  let cycle = keys;

  while (cycle.length) {
    const items: String2[] = [];
    const length = cycle.length;

    cycle = cycle.filter((k) => {
      if (dependencies[k].every((x) => used.has(x) || !keys.includes(x))) {
        items.push(k);

        return false;
      }

      return true;
    });

    order.push(...items);
    items.forEach((x) => used.add(x));

    if (cycle.length === length) {
      break;
    }
  }

  return {order, cycle};
}
