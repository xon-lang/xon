import {$Text, ArrayData, Dictionary, newArrayData, newUniqueList, Text} from '#common';

export function topologicalSort(dependencies: Dictionary<Text, ArrayData<Text>>): {
  order: ArrayData<Text>;
  cycle: ArrayData<Text>;
} {
  const used = newUniqueList<Text>($Text());
  const order = newArrayData<Text>($Text());
  const keys = dependencies.keys();
  let cycle = keys;

  while (cycle.count()) {
    const items = newArrayData<Text>($Text());
    const length = cycle.count();

    cycle = cycle.filter((k) => {
      if (dependencies.get(k)?.every((x) => used.hasItem(x) || !keys.hasItem(x))) {
        items.addLastItem(k);

        return false;
      }

      return true;
    });

    order.addLastItems(items);
    items.forEach((x) => used.addLastItem(x));

    if (cycle.count() === length) {
      break;
    }
  }

  return {order, cycle};
}
