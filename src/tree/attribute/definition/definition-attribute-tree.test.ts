import { LiteralExpressionTree } from '../expression/literal-expression/literal-expression.tree';
import { parseAttribute } from '../parse';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { FunctionTypeTree } from '../type/function-type/function-type.tree';
import { IdTypeTree } from '../type/id-type/id-type.tree';
import { AttributeTree } from './attribute-tree';

test('array property', () => {
  const code = 's Array<String>';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('s');
  expect(tree.isPrivate).toBe(false);
  expect(tree.type.name).toBe('Array');
  expect((tree.type as IdTypeTree).typeArguments[0].name).toBe('String');
  expect(tree.body).toBe(null);
});

test('private integer', () => {
  const code = '_a Integer';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
  expect(tree.body).toBe(null);
});

test('integer value', () => {
  const code = '_a Integer: 9';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  expect(tree.type.name).toBe('Integer');
  expect(
    ((tree.body[0] as ExpressionStatementTree).expression as LiteralExpressionTree).literal.value,
  ).toBe(9);
});

test('has function type', () => {
  const code = '_a (i Integer) String';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('_a');
  expect(tree.isPrivate).toBe(true);
  const type = tree.type as FunctionTypeTree;
  expect(type.name).toBe('Function');
  expect(type.parameters.length).toBe(1);
  expect(type.parameters[0].type.name).toBe('Integer');
  expect(type.resultType.name).toBe('String');
  expect(tree.body).toBe(null);
});

test('method member', () => {
  const code = '_funcName<T>(argA Integer, argB Float, argC String) String:\n    log(222)';
  const tree = parseAttribute(code);
  expect(tree).toBeInstanceOf(AttributeTree);

  expect(tree.id.text).toBe('_funcName');
  expect(tree.isPrivate).toBe(true);

  const type = tree.type as FunctionTypeTree;
  expect(tree.typeParameters.length).toBe(1);
  expect(tree.typeParameters[0].id.text).toBe('T');

  expect(type.parameters.length).toBe(3);
  expect(type.parameters[0].id.text).toBe('argA');
  expect(type.parameters[0].type.name).toBe('Integer');

  expect(type.parameters[1].id.text).toBe('argB');
  expect(type.parameters[1].type.name).toBe('Float');

  expect(type.parameters[2].id.text).toBe('argC');
  expect(type.parameters[2].type.name).toBe('String');

  expect(type.resultType.name).toBe('String');
});
