import { IdTree } from '../id/id-tree';
import { parseParameter } from '../../util/parse';
import { InvokeExpressionTree } from '../expression/invoke/invoke-expression-tree';
import { ParameterTree } from './parameter-tree';

test('id type', () => {
  const code = `abc: Integer`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('abc');
});

test('id lambda type', () => {
  const code = `abc: [a: Number]=> Integer`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('abc');
});

test('variable type value', () => {
  const code = `statements: StatementTree[] = []`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('statements');
});

test('method assign', () => {
  const code = `statements = [a, b: Number]=> 7`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('statements');
});

test('method single body', () => {
  const code = `statements:[a, b: Number]=> Integer = 7`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('statements');
});

test('method multiple body', () => {
  const code = `statements:[a, b: Number]=> Integer\n  123\n  return 456`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('statements');
});

test('name and array type', () => {
  const code = `items: ExpressionTree[]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name).toBeInstanceOf(IdTree);
  expect(tree.type).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.body).toBe(null);
});

test('name and array type', () => {
  const code = `getParameterTrees:(contexts: ParameterContext[])=> None`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('getParameterTrees');
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
});

test('bracket parameter with type', () => {
  const code = `[a]: Integer[] = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.parameters.length).toBe(1);
});

test('bracket parameter without type', () => {
  const code = `[a] = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.parameters.length).toBe(1);
});

test('paren parameters', () => {
  const code = `(a, b, c) = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.parameters.length).toBe(3);
});

test('brace parameters', () => {
  const code = `{a, b, c} = import lib.abc`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.parameters.length).toBe(3);
});
