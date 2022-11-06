import {
  DeclarationStatementTree,
  DeclarationTree,
  IdExpressionTree,
  IdTree,
  InvokeExpressionTree,
  MethodExpressionTree,
} from '~/tree';
import { parseDeclaration } from '~/util';

test('id type', () => {
  const code = 'abc: Integer';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('abc');
});

test('generics with parameters', () => {
  const code = 'abc <N,M ,K:String > (): List<K>';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('abc');
  expect(tree.generics.length).toBe(3);
  expect(tree.generics[0].name.text).toBe('N');
  expect(tree.generics[1].name.text).toBe('M');
  expect(tree.generics[2].name.text).toBe('K');
  expect((tree.generics[2].type as IdExpressionTree).name.text).toBe('String');
  const type = tree.type as InvokeExpressionTree;
  expect((type.instance as IdExpressionTree).name.text).toBe('List');
  expect(type.arguments.length).toBe(1);
  expect((type.arguments[0].value as IdExpressionTree).name.text).toBe('K');
});

test('id lambda type', () => {
  const code = 'abc: [a: Number]=> Integer';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('abc');
});

test('variable type value', () => {
  const code = 'statements: StatementTree[] = []';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('statements');
});

test('method assign', () => {
  const code = 'statements = [a, b: Number]=> 7';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('statements');
});

test('method single body', () => {
  const code = 'statements:[a, b: Number]=> Integer = 7';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('statements');
});

test('method multiple body', () => {
  const code = 'statements:[a, b: Number]=> Integer\n  123\n  return 456';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name.text).toBe('statements');
});

test('name and array type', () => {
  const code = 'items: ExpressionTree[]';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.name).toBeInstanceOf(IdTree);
  expect(tree.type).toBeInstanceOf(InvokeExpressionTree);
  expect(tree.body).toBe(null);
});

test('name and method type', () => {
  const code = 'getParameterTrees:(contexts: ParameterContext[])=> null';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
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
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
});

test('bracket parameter with type', () => {
  const code = '[a]: Integer[] = [1, 2 ,3]';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.destructure.length).toBe(1);
});

test('bracket parameter without type', () => {
  const code = '[a] = [1, 2 ,3]';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.destructure.length).toBe(1);
});

test('paren parameters', () => {
  const code = '(a, b, c) = [1, 2 ,3]';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.destructure.length).toBe(3);
  expect(tree.generics.length).toBe(0);
  expect(tree.parameters.length).toBe(0);
});

test('brace parameters', () => {
  const code = '{a, b, c} = import lib.abc';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.destructure.length).toBe(3);
  expect(tree.generics.length).toBe(0);
  expect(tree.parameters.length).toBe(0);
});

test('operator with no parameters', () => {
  const code = '>: (a: Number, b: Number) => Boolean';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
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

test('operator with parameters', () => {
  const code = '> (a: Number, b: Number): Boolean';
  const tree = parseDeclaration(code);

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.parameters.length).toBe(2);
  expect(tree.parameters[0].name.text).toBe('a');
  expect(tree.parameters[0].type).toBeInstanceOf(IdExpressionTree);
  expect(tree.parameters[1].name.text).toBe('b');
  expect(tree.parameters[1].type).toBeInstanceOf(IdExpressionTree);
  expect(tree.type).toBeInstanceOf(IdExpressionTree);
  expect((tree.type as IdExpressionTree).name.text).toBe('Boolean');
});

test('model animal', () => {
  const code = 'model Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.type).toBe(null);
  expect(tree.attributes.length).toBe(0);
});

test('object with parameters', () => {
  const code = 'object Cat(name: String) : Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier.text).toBe('object');
  expect(tree.name.text).toBe('Cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name.text).toBe('name');
  expect((tree.parameters[0].type as IdExpressionTree).name.text).toBe('String');
  expect(tree.attributes.length).toBe(0);
});

test('model cat', () => {
  const code = 'model Cat: Animal';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect((tree.type as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.attributes.length).toBe(0);
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   --def: Integer\n   abc: Integer';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.allIssues().length).toBe(0);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.type).toBe(null);
  expect(tree.attributes.length).toBe(1);

  const attributes = tree.attributes.map(
    (x) => (x as DeclarationStatementTree).declaration as DeclarationTree,
  );
  expect(attributes[0].name.text).toBe('abc');
  expect((attributes[0].type as IdExpressionTree).name.text).toBe('Integer');
});

test('model cat with generics', () => {
  const code = 'model Cat<T: Number>: Animal<T, Integer>';
  const tree = parseDeclaration(code) as DeclarationTree;

  expect(tree).toBeInstanceOf(DeclarationTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect(tree.generics.length).toBe(1);
  expect(tree.generics[0].name.text).toBe('T');
  expect((tree.generics[0].type as IdExpressionTree).name.text).toBe('Number');
  const type = tree.type as InvokeExpressionTree;
  expect((type.instance as IdExpressionTree).name.text).toBe('Animal');
  expect(type.arguments.length).toBe(2);
  expect((type.arguments[0].value as IdExpressionTree).name.text).toBe('T');
  expect((type.arguments[1].value as IdExpressionTree).name.text).toBe('Integer');
  expect(tree.attributes.length).toBe(0);
});
