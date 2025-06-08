import {
  $KeyValue,
  $Text,
  ArrayData,
  newArrayData,
  newDictionary,
  newKeyValue,
  newText,
  Text,
  topologicalSort,
} from '#common';
import {expect, test} from 'vitest';

test('Empty', () => {
  const dependencies = newDictionary<Text, ArrayData<Text>>();
  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(0);
  expect(cycle.count()).toBe(0);
});

test('No dependencies', () => {
  const dependencies = newDictionary(
    newArrayData($KeyValue(), [newKeyValue(newText('A'), newArrayData<Text>($Text()))]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(1);
  expect(order.at(0)?.toNativeString()).toBe('A');

  expect(cycle.count()).toBe(0);
});

test('Non existence', () => {
  const dependencies = newDictionary(
    newArrayData($KeyValue(), [newKeyValue(newText('A'), newArrayData($KeyValue(), [newText('B')]))]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(1);
  expect(order.at(0)?.toNativeString()).toBe('A');

  expect(cycle.count()).toBe(0);
});

test('Self', () => {
  const dependencies = newDictionary(
    newArrayData($KeyValue(), [newKeyValue(newText('A'), newArrayData($KeyValue(), [newText('A')]))]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(0);

  expect(cycle.count()).toBe(1);
  expect(cycle.at(0)?.toNativeString()).toBe('A');
});

test('No cycle', () => {
  const dependencies = newDictionary(
    newArrayData($KeyValue(), [
      newKeyValue(newText('A'), newArrayData<Text>($Text())),
      newKeyValue(newText('B'), newArrayData($Text(), [newText('A')])),
      newKeyValue(newText('C'), newArrayData($Text(), [newText('A'), newText('B')])),
      newKeyValue(newText('D'), newArrayData($Text(), [newText('F')])),
      newKeyValue(newText('E'), newArrayData($Text(), [newText('D'), newText('C')])),
      newKeyValue(newText('F'), newArrayData<Text>($Text())),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(6);
  expect(order.at(0)?.toNativeString()).toBe('A');
  expect(order.at(1)?.toNativeString()).toBe('F');
  expect(order.at(2)?.toNativeString()).toBe('B');

  expect(cycle.count()).toBe(0);
});

test('With cycle', () => {
  const dependencies = newDictionary(
    newArrayData($Text(), [
      newKeyValue(newText('A'), newArrayData<Text>($Text())),
      newKeyValue(newText('E'), newArrayData($Text(), [newText('D'), newText('C')])),
      newKeyValue(newText('C'), newArrayData($Text(), [newText('A'), newText('B')])),
      newKeyValue(newText('B'), newArrayData($Text(), [newText('A')])),
      newKeyValue(newText('D'), newArrayData($Text(), [newText('F')])),
      newKeyValue(newText('F'), newArrayData<Text>($Text())),
      newKeyValue(newText('G'), newArrayData($Text(), [newText('H')])),
      newKeyValue(newText('H'), newArrayData($Text(), [newText('G')])),
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

test('Cycle 2', () => {
  const dependencies = newDictionary(
    newArrayData($KeyValue(), [
      newKeyValue(newText('A'), newArrayData($Text(), [newText('B')])),
      newKeyValue(newText('B'), newArrayData($Text(), [newText('A')])),
      newKeyValue(newText('C'), newArrayData<Text>($Text())),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(1);
  expect(order.at(0)?.toNativeString()).toBe('C');

  expect(cycle.count()).toBe(2);
  expect(cycle.at(0)?.toNativeString()).toBe('A');
  expect(cycle.at(1)?.toNativeString()).toBe('B');
});

test('Cycle 3', () => {
  const dependencies = newDictionary(
    newArrayData($KeyValue(), [
      newKeyValue(newText('A'), newArrayData($Text(), [newText('A')])),
      newKeyValue(newText('B'), newArrayData($Text(), [newText('A')])),
    ]),
  );

  const {order, cycle} = topologicalSort(dependencies);
  expect(order.count()).toBe(0);

  expect(cycle.count()).toBe(2);
  expect(cycle.at(0)?.toNativeString()).toBe('A');
  expect(cycle.at(1)?.toNativeString()).toBe('B');
});
