import { parseParameter } from '../../util/parse';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { InvokeExpressionTree } from '../expression/invoke/invoke-expression-tree';
import { MethodExpressionTree } from '../expression/method/method-expression-tree';
import { IdTree } from '../id/id-tree';
import { ParameterTree } from './parameter-tree';

test('id type', () => {
  const code = `abc: Integer`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('abc');
});

test('generics with parameters', () => {
  const code = `abc <N,M ,K:String > (): List<K>`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.name.text).toBe('abc');
  expect(tree.generics.length).toBe(3);
  expect(tree.generics[0].name.text).toBe('N');
  expect(tree.generics[1].name.text).toBe('M');
  expect(tree.generics[2].name.text).toBe('K');
  expect((tree.generics[2].type as IdExpressionTree).name.text).toBe('String');
  expect((tree.type as IdExpressionTree).name.text).toBe('List');
  expect((tree.type as IdExpressionTree).generics.length).toBe(1);
  expect(((tree.type as IdExpressionTree).generics[0] as IdExpressionTree).name.text).toBe('K');
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
  expect(tree.destructure.length).toBe(1);
});

test('bracket parameter without type', () => {
  const code = `[a] = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.destructure.length).toBe(1);
});

test('paren parameters', () => {
  const code = `(a, b, c) = [1, 2 ,3]`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.destructure.length).toBe(3);
});

test('brace parameters', () => {
  const code = `{a, b, c} = import lib.abc`;
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.destructure.length).toBe(3);
});

test('operator with no params', () => {
  const code = '>: (a: Number, b: Number) => Boolean';
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.type).toBeInstanceOf(MethodExpressionTree);
  const type = tree.type as MethodExpressionTree;
  expect(type.parameters.length).toBe(2);
  expect(type.parameters[0].name.text).toBe('a');
  expect(type.parameters[0].type).toBeInstanceOf(IdExpressionTree);
  expect(type.parameters[1].name.text).toBe('b');
  expect(type.parameters[1].type).toBeInstanceOf(IdExpressionTree);
  expect(type.value).toBeInstanceOf(IdExpressionTree);
  expect((type.value as IdExpressionTree).name.text).toBe('Boolean');
});

test('operator with params', () => {
  const code = '> (a: Number, b: Number): Boolean';
  const tree = parseParameter(code);

  expect(tree).toBeInstanceOf(ParameterTree);
  expect(tree.params.length).toBe(2);
  expect(tree.params[0].name.text).toBe('a');
  expect(tree.params[0].type).toBeInstanceOf(IdExpressionTree);
  expect(tree.params[1].name.text).toBe('b');
  expect(tree.params[1].type).toBeInstanceOf(IdExpressionTree);
  expect(tree.type).toBeInstanceOf(IdExpressionTree);
  expect((tree.type as IdExpressionTree).name.text).toBe('Boolean');
});
