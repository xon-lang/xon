import { IdToken } from '../../util/id-token';
import { parseParameter } from '../../util/parse';
import { InvokeExpressionTree } from '../expression/invoke/invoke-expression-tree';
import { ParameterTree } from './parameter-tree';

test('id', () => {
  const code = `abc`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('abc');
});

test('id type', () => {
  const code = `abc Integer`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('abc Integer');
});

test('id type', () => {
  const code = `abc[a Number]=> Integer`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('abc [a Number] => Integer');
});

test('variable type value ', () => {
  const code = `statements StatementTree[] = []`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('statements StatementTree[] = []');
});

test('method single body', () => {
  const code = `statements[a, b Number]=> Integer= 7`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('statements [a, b Number] => Integer = 7');
});

test('method multiple body', () => {
  const code = `statements[a, b Number]=> Integer\n  123\n  return 456`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('statements [a, b Number] => Integer\n  123\n  return 456');
});

test('name and array type', () => {
  const code = `items ExpressionTree[]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('items ExpressionTree[]');
  expect(tree.name).toBeInstanceOf(IdToken);
  expect(tree.type).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.body).toBe(null);
});

test('name and array type', () => {
  const code = `getParameterTrees(contexts ParameterContext[])=> None`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('getParameterTrees (contexts ParameterContext[]) => None');
});

test('preprocessor', () => {
  const code = `
a
  #{
    abc
    123 + 456
    log(0)
  }`.trim();
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe(code);
});

test('bracket parameter with type', () => {
  const code = `[a] Integer[] = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('[a] Integer[] = [1, 2, 3]');
});

test('bracket parameter without type', () => {
  const code = `[a] = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('[a] = [1, 2, 3]');
});

test('paren parameters', () => {
  const code = `(a, b, c) = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('(a, b, c) = [1, 2, 3]');
});

test('brace parameters', () => {
  const code = `{a, b, c}: {a:1, b:2 ,c:3}`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.toString()).toBe('{a, b, c}: {a: 1, b: 2, c: 3}');
});
