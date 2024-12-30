import {ArrayData, Dictionary, newArrayData, Text} from '#common';

export function topologicalSort(dependencies: Dictionary<Text, ArrayData<Text>>): {
  order: ArrayData<Text>;
  cycle: ArrayData<Text>;
} {
  const used = new Set();
  const order = newArrayData<Text>();
  const keys = dependencies.keys();
  let cycle = keys;

  while (cycle.length()) {
    const items = newArrayData<Text>();
    const length = cycle.length();

    cycle = cycle.filter((k) => {
      if (dependencies.get(k)?.every((x) => used.has(x) || !keys.hasItem(x))) {
        items.addLastItem(k);

        return false;
      }

      return true;
    });

    order.addLastItems(items);
    items._items.forEach((x) => used.add(x));

    if (cycle.length() === length) {
      break;
    }
  }

  return {order, cycle};
}
