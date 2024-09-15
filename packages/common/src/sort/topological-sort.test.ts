import {topologicalSort} from '#common';

test('empty', () => {
  let dependencies = {};

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(0);
  expect(cycle.length).toBe(0);
});

test('no dependencies', () => {
  let dependencies = {
    A: [],
  };

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(1);
  expect(order[0]).toBe('A');

  expect(cycle.length).toBe(0);
});

test('non existence', () => {
  let dependencies = {
    A: ['B'],
  };

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(1);
  expect(order[0]).toBe('A');

  expect(cycle.length).toBe(0);
});

test('self', () => {
  let dependencies = {
    A: ['A'],
  };

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(0);

  expect(cycle.length).toBe(1);
  expect(cycle[0]).toBe('A');
});

test('no cycle', () => {
  let dependencies = {
    A: [],
    B: ['A'],
    C: ['A', 'B'],
    D: ['F'],
    E: ['D', 'C'],
    F: [],
  };

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(6);
  expect(order[0]).toBe('A');
  expect(order[1]).toBe('F');
  expect(order[2]).toBe('B');

  expect(cycle.length).toBe(0);
});

test('with cycle', () => {
  let dependencies = {
    A: [],
    E: ['D', 'C'],
    C: ['A', 'B'],
    B: ['A'],
    D: ['F'],
    F: [],
    G: ['H'],
    H: ['G'],
  };

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(6);
  expect(order[0]).toBe('A');
  expect(order[1]).toBe('F');
  expect(order[2]).toBe('B');

  expect(cycle.length).toBe(2);
  expect(cycle[0]).toBe('G');
  expect(cycle[1]).toBe('H');
});

test('cycle 2', () => {
  let dependencies = {A: ['B'], B: ['A'], C: []};

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(1);
  expect(order[0]).toBe('C');

  expect(cycle.length).toBe(2);
  expect(cycle[0]).toBe('A');
  expect(cycle[1]).toBe('B');
});

test('cycle 3', () => {
  let dependencies = {A: ['A'], B: ['A']};

  const {order: order, cycle: cycle} = topologicalSort(dependencies);
  expect(order.length).toBe(0);

  expect(cycle.length).toBe(2);
  expect(cycle[0]).toBe('A');
  expect(cycle[1]).toBe('B');
});
