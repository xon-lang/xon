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

test('method single body', () => {
  const code = `statements[a, b Number] Integer= 7`;
  const tree = parseAttribute(code);

  expect(tree).toBeInstanceOf(AttributeTree);
  expect(tree.toString()).toBe('statements[a, b Number] Integer = 7');
});

test('method multiple body', () => {
  const code = `statements[a, b Number] Integer\n  123\n  return 456`;
  const tree = parseAttribute(code);

  expect(tree).toBeInstanceOf(AttributeTree);
  expect(tree.toString()).toBe('statements[a, b Number] Integer\n  123\n  return 456');
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

test('name and array type', () => {
  const code = `getAttributeTrees[contexts AttributeContext[]]`;
  const tree = parseAttribute(code);

  expect(tree).toBeInstanceOf(AttributeTree);
  expect(tree.parameters.length).toBe(1);
  expect(tree.toString()).toBe('getAttributeTrees[contexts AttributeContext[]]');
});

test('preprocessor', () => {
  const code = `
a
  #{
    abc
    123 + 456
    log(0)
  }`.trim();
  const tree = parseAttribute(code);

  expect(tree).toBeInstanceOf(AttributeTree);
  expect(tree.toString()).toBe(code);
});
