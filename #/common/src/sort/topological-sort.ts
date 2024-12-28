import {ArrayData, Dictionary, newArrayData, newText, Text} from '#common';

export function topologicalSort(dependencies: Dictionary<Text, ArrayData<Text>>): {
  order: ArrayData<Text>;
  cycle: ArrayData<Text>;
} {
  const used = new Set();
  const order: ArrayData<Text> = newArrayData();
  const keys = newArrayData(Object.keys(dependencies).map((x) => newText(x)));
  let cycle = keys;

  while (cycle.length) {
    const items: Text[] = [];
    const length = cycle.length;

    cycle = cycle.filter((k) => {
      if (dependencies.get(k)?.every((x) => used.has(x) || !keys.hasItem(x))) {
        items.push(k);

        return false;
      }

      return true;
    });

    order.addLast(...items);
    items.forEach((x) => used.add(x));

    if (cycle.length === length) {
      break;
    }
  }

  return {order, cycle};
}
