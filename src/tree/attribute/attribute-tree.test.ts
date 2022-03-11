import { parseAttribute } from '../../util/parse';
import { AttributeTree } from './attribute-tree';

test('id', () => {
  const code = `abc`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('abc');
});

test('id type', () => {
  const code = `abc Integer`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('abc Integer');
});

test('id type', () => {
  const code = `abc<|T, V|>(a Number) Integer`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('abc<|T, V|>(a Number) Integer');
});

test('modifier operator', () => {
  const code = `operator  +  ( other  Number )  Number `;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('operator + (other Number) Number');
});

test('variable type value ', () => {
  const code = `statements StatementTree[] = []`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('statements StatementTree[] = []');
});
