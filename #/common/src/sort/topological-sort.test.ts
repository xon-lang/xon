import {
  ArrayData,
  newArrayData,
  newDictionary,
  newKeyValue,
  newTextData,
  TextData,
  topologicalSort,
} from '#/common';

test('empty', () => {
  const dependencies = newDictionary<TextData, ArrayData<TextData>>();
  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(0);
  expect(cycle.length).toBe(0);
});

test('no dependencies', () => {
  const dependencies = newDictionary(newArrayData([newKeyValue(newTextData('A'), newArrayData<TextData>())]));

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(1);
  expect(order.at(0)).toBe('A');

  expect(cycle.length).toBe(0);
});

test('non existence', () => {
  const dependencies = newDictionary(
    newArrayData([newKeyValue(newTextData('A'), newArrayData([newTextData('B')]))]),
  );

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(1);
  expect(order.at(0)).toBe('A');

  expect(cycle.length).toBe(0);
});

test('self', () => {
  const dependencies = newDictionary(
    newArrayData([newKeyValue(newTextData('A'), newArrayData([newTextData('A')]))]),
  );

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(0);

  expect(cycle.length).toBe(1);
  expect(cycle.at(0)).toBe('A');
});

test('no cycle', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newTextData('A'), newArrayData<TextData>()),
      newKeyValue(newTextData('B'), newArrayData([newTextData('A')])),
      newKeyValue(newTextData('C'), newArrayData([newTextData('A'), newTextData('B')])),
      newKeyValue(newTextData('D'), newArrayData([newTextData('F')])),
      newKeyValue(newTextData('E'), newArrayData([newTextData('D'), newTextData('C')])),
      newKeyValue(newTextData('F'), newArrayData<TextData>()),
    ]),
  );

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(6);
  expect(order.at(0)).toBe('A');
  expect(order.at(1)).toBe('F');
  expect(order.at(2)).toBe('B');

  expect(cycle.length).toBe(0);
});

test('with cycle', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newTextData('A'), newArrayData<TextData>()),
      newKeyValue(newTextData('E'), newArrayData([newTextData('D'), newTextData('C')])),
      newKeyValue(newTextData('C'), newArrayData([newTextData('A'), newTextData('B')])),
      newKeyValue(newTextData('B'), newArrayData([newTextData('A')])),
      newKeyValue(newTextData('D'), newArrayData([newTextData('F')])),
      newKeyValue(newTextData('F'), newArrayData<TextData>()),
      newKeyValue(newTextData('G'), newArrayData([newTextData('H')])),
      newKeyValue(newTextData('H'), newArrayData([newTextData('G')])),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(6);
  expect(order.at(0)).toBe('A');
  expect(order.at(1)).toBe('F');
  expect(order.at(2)).toBe('B');

  expect(cycle.length).toBe(2);
  expect(cycle.at(0)).toBe('G');
  expect(cycle.at(1)).toBe('H');
});

test('cycle 2', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newTextData('A'), newArrayData([newTextData('B')])),
      newKeyValue(newTextData('B'), newArrayData([newTextData('A')])),
      newKeyValue(newTextData('C'), newArrayData<TextData>()),
    ]),
  );

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(1);
  expect(order.at(0)).toBe('C');

  expect(cycle.length).toBe(2);
  expect(cycle.at(0)).toBe('A');
  expect(cycle.at(1)).toBe('B');
});

test('cycle 3', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newTextData('A'), newArrayData([newTextData('A')])),
      newKeyValue(newTextData('B'), newArrayData([newTextData('A')])),
    ]),
  );

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(0);

  expect(cycle.length).toBe(2);
  expect(cycle.at(0)).toBe('A');
  expect(cycle.at(1)).toBe('B');
});
