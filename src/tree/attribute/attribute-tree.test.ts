import { IdToken } from '../../util/id-token';
import { parseAttribute } from '../../util/parse';
import { InvokeExpressionTree } from '../expression/invoke/invoke-expression-tree';
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
  const code = `abc[a Number] Integer`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('abc[a Number] Integer');
});

test('variable type value ', () => {
  const code = `statements StatementTree[] = []`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('statements StatementTree[] = []');
});

test('name and array type', () => {
  const code = `items ExpressionTree[]`;
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.toString()).toBe('items ExpressionTree[]');
  expect(tree.name).toBeInstanceOf(IdToken);
  expect(tree.parameters.length).toBe(0);
  expect(tree.isMethod).toBe(false);
  expect(tree.type).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.body).toBe(null);
});
