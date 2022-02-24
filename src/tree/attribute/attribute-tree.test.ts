import { parseAttribute } from '../../util/parse';
import { AttributeTree } from './attribute-tree';

test('id', () => {
  const code = `abc`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('abc');
});

test('modifier operator', () => {
  const code = `operator  +  ( other  Number )  Number `;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('operator + (other Number) Number');
});
