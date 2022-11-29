import { ParameterDeclarationTree } from '~/tree/declaration/parameter/parameter-declaration-tree';
import { ArrayExpressionTree } from '~/tree/expression/array/array-expression-tree';
import { IdExpressionTree } from '~/tree/expression/id/id-expression-tree';
import { InvokeExpressionTree } from '~/tree/expression/invoke/invoke-expression-tree';
import { MethodExpressionTree } from '~/tree/expression/method/method-expression-tree';
import { Token } from '~/tree/token';
import { parseDeclaration } from '~/util/parse';

test('id type', () => {
  const code = 'abc: Integer';
  const tree = parseDeclaration(code) as ParameterDeclarationTree;

  expect(tree).toBeInstanceOf(ParameterDeclarationTree);
  expect(tree.name?.text).toBe('abc');
  expect((tree.type as IdExpressionTree).name.text).toBe('Integer');
});

// test('generics with parameters', () => {
//   const code = 'abc {N,M ,K:String } (): List{K}';
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
//   expect(tree.name?.text).toBe('abc');
//   expect(tree.generics.length).toBe(3);
//   expect(tree.generics[0].name?.text).toBe('N');
//   expect(tree.generics[1].name?.text).toBe('M');
//   expect(tree.generics[2].name?.text).toBe('K');
//   expect((tree.generics[2].type as IdExpressionTree).name.text).toBe('String');
//   const type = tree.type as InvokeExpressionTree;
//   expect((type.instance as IdExpressionTree).name.text).toBe('List');
//   expect(type.arguments.length).toBe(1);
//   expect((type.arguments[0].value as IdExpressionTree).name.text).toBe('K');
// });

test('id lambda type', () => {
  const code = 'abc: [a: Number]=> Integer';
  const tree = parseDeclaration(code) as ParameterDeclarationTree;

  expect(tree).toBeInstanceOf(ParameterDeclarationTree);
  expect(tree.name?.text).toBe('abc');
  const type = tree.type as MethodExpressionTree;
  expect(type).toBeInstanceOf(MethodExpressionTree);
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].name.text).toBe('a');
  expect((type.parameters[0].type as IdExpressionTree).name.text).toBe('Number');
  expect((type.value as IdExpressionTree).name.text).toBe('Integer');
});

test('variable type value', () => {
  const code = 'statements: StatementTree[] = []';
  const tree = parseDeclaration(code) as ParameterDeclarationTree;

  expect(tree).toBeInstanceOf(ParameterDeclarationTree);
  expect(tree.name?.text).toBe('statements');
  const type = tree.type as InvokeExpressionTree;
  expect(type).toBeInstanceOf(InvokeExpressionTree);
  expect((type.instance as IdExpressionTree).name.text).toBe('StatementTree');
  const value = tree.value as ArrayExpressionTree;
  expect(value.arguments.length).toBe(0);
});

// test('method assign', () => {
//   const code = 'statements = [a, b: Number]=> 7';
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
//   expect(tree.name?.text).toBe('statements');
// });

// test('method single body', () => {
//   const code = 'statements:[a, b: Number]=> Integer = 7';
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
//   expect(tree.name?.text).toBe('statements');
// });

// test('method multiple body', () => {
//   const code = 'statements:[a, b: Number]=> Integer\n  123\n  return 456';
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
//   expect(tree.name?.text).toBe('statements');
// });

// test('name and array type', () => {
//   const code = 'items: ExpressionTree[]';
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
//   expect(tree.name).toBeInstanceOf(Token);
//   expect(tree.type).toBeInstanceOf(InvokeExpressionTree);
//   expect(tree.body).toBe(null);
// });

// test('name and method type', () => {
//   const code = 'getParameterTrees:(contexts: ParameterContext[])=> null';
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
//   expect(tree.name?.text).toBe('getParameterTrees');
// });

// test('preprocessor', () => {
//   const code = `
// a
//   #{
//     abc
//     123 + 456
//     log(0)
//   }`.trim();
//   const tree = parseDeclaration(code) as ParameterDeclarationTree;

//   expect(tree).toBeInstanceOf(ParameterDeclarationTree);
// });
