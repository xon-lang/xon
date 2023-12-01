import { ModelNode } from '~/parser/node/model/model-node';
import { NodeType } from '~/parser/node/node-type';
import { parse } from '~/parser/parser';

test('a', () => {
  const text = 'model Abstract';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as ModelNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.MODEL);
  expect(tree.modifier?.text).toBe('model');
  expect(tree.id?.text).toBe('Abstract');
});


test('id a', () => {
  const text = 'a = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as IdAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.ID_ASSIGN);
  expect(tree.assignee?.text).toBe('a');
  expect((tree.assign.value as IntegerNode)?.text).toBe('1');
});

test('id b', () => {
  const text = 'b =   ';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as IdAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.ID_ASSIGN);
  expect(tree.assignee?.text).toBe('b');
  expect(tree.assign.value).toBe(null);
});

test('group', () => {
  const text = '(a) = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as ArrayAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.ARRAY_ASSIGN);
  expect(tree.assignee.items.length).toBe(1);
  expect((tree.assignee.items[0] as IdNode).text).toBe('a');
});

test('array', () => {
  const text = '[a] = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as ArrayAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.ARRAY_ASSIGN);
  expect(tree.assignee.items.length).toBe(1);
  expect((tree.assignee.items[0] as IdNode).text).toBe('a');
});

test('object', () => {
  const text = '{a} = 1';
  const nodes = parse(text).root.children;
  const tree = nodes[0] as ObjectAssignNode;

  expect(nodes.length).toBe(1);

  expect(tree.$).toBe(NodeType.OBJECT_ASSIGN);
  expect(tree.assignee.items.length).toBe(1);
  expect((tree.assignee.items[0] as IdNode).text).toBe('a');
});
