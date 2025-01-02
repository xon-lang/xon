import {ArrayData, newArrayData, newDictionary, newKeyValue, newText, Text, topologicalSort} from '#common';
import {expect, test} from 'vitest';

test('empty', () => {
  const dependencies = newDictionary<Text, ArrayData<Text>>();
  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(0);
  expect(cycle.count()).toBe(0);
});

test('no dependencies', () => {
  const dependencies = newDictionary(newArrayData([newKeyValue(newText('A'), newArrayData<Text>())]));

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(1);
  expect(order.at(0)?.toNativeString()).toBe('A');

  expect(cycle.count()).toBe(0);
});

test('non existence', () => {
  const dependencies = newDictionary(newArrayData([newKeyValue(newText('A'), newArrayData([newText('B')]))]));

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(1);
  expect(order.at(0)?.toNativeString()).toBe('A');

  expect(cycle.count()).toBe(0);
});

test('self', () => {
  const dependencies = newDictionary(newArrayData([newKeyValue(newText('A'), newArrayData([newText('A')]))]));

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(0);

  expect(cycle.count()).toBe(1);
  expect(cycle.at(0)?.toNativeString()).toBe('A');
});

test('no cycle', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newText('A'), newArrayData<Text>()),
      newKeyValue(newText('B'), newArrayData([newText('A')])),
      newKeyValue(newText('C'), newArrayData([newText('A'), newText('B')])),
      newKeyValue(newText('D'), newArrayData([newText('F')])),
      newKeyValue(newText('E'), newArrayData([newText('D'), newText('C')])),
      newKeyValue(newText('F'), newArrayData<Text>()),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(6);
  expect(order.at(0)?.toNativeString()).toBe('A');
  expect(order.at(1)?.toNativeString()).toBe('F');
  expect(order.at(2)?.toNativeString()).toBe('B');

  expect(cycle.count()).toBe(0);
});

test('with cycle', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newText('A'), newArrayData<Text>()),
      newKeyValue(newText('E'), newArrayData([newText('D'), newText('C')])),
      newKeyValue(newText('C'), newArrayData([newText('A'), newText('B')])),
      newKeyValue(newText('B'), newArrayData([newText('A')])),
      newKeyValue(newText('D'), newArrayData([newText('F')])),
      newKeyValue(newText('F'), newArrayData<Text>()),
      newKeyValue(newText('G'), newArrayData([newText('H')])),
      newKeyValue(newText('H'), newArrayData([newText('G')])),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(6);
  expect(order.at(0)?.toNativeString()).toBe('A');
  expect(order.at(1)?.toNativeString()).toBe('F');
  expect(order.at(2)?.toNativeString()).toBe('B');

  expect(cycle.count()).toBe(2);
  expect(cycle.at(0)?.toNativeString()).toBe('G');
  expect(cycle.at(1)?.toNativeString()).toBe('H');
});

test('cycle 2', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newText('A'), newArrayData([newText('B')])),
      newKeyValue(newText('B'), newArrayData([newText('A')])),
      newKeyValue(newText('C'), newArrayData<Text>()),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(1);
  expect(order.at(0)?.toNativeString()).toBe('C');

  expect(cycle.count()).toBe(2);
  expect(cycle.at(0)?.toNativeString()).toBe('A');
  expect(cycle.at(1)?.toNativeString()).toBe('B');
});

test('cycle 3', () => {
  const dependencies = newDictionary(
    newArrayData([
      newKeyValue(newText('A'), newArrayData([newText('A')])),
      newKeyValue(newText('B'), newArrayData([newText('A')])),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(0);

  expect(cycle.count()).toBe(2);
  expect(cycle.at(0)?.toNativeString()).toBe('A');
  expect(cycle.at(1)?.toNativeString()).toBe('B');
});
