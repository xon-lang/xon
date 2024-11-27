import {ArrayData, Dictionary, newArrayData, newTextData, TextData} from '#/common';

export function topologicalSort(dependencies: Dictionary<TextData, ArrayData<TextData>>): {
  order: ArrayData<TextData>;
  cycle: ArrayData<TextData>;
} {
  const used = new Set();
  const order: ArrayData<TextData> = newArrayData();
  const keys = newArrayData(Object.keys(dependencies).map((x) => newTextData(x)));
  let cycle = keys;

  while (cycle.length) {
    const items: TextData[] = [];
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
