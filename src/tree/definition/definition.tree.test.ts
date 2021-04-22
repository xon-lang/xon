import * as fs from 'fs';
import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { MethodExpressionTree } from '../expression/method-expression/method-expression.tree';
import { parseDefinition } from '../parse';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { DefinitionTree } from './definition.tree';

test('one scope', () => {
  const code = fs.readFileSync('src/tree/definition/definition.test.xon').toString();
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  expect(tree.name).toBe('SomeClass');
  expect(tree.declaredGenerics.length).toBe(1);
  expect(tree.declaredGenerics[0]).toBe('T');

  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('name');
  expect(tree.parameters[0].type.name).toBe('String');

  expect(tree.inheritanceType.name).toBe('BaseClass');
  expect((tree.inheritanceType as PlainTypeTree).generics.length).toBe(2);
  expect((tree.inheritanceType as PlainTypeTree).generics[0].name).toBe('String');
  expect((tree.inheritanceType as PlainTypeTree).generics[1].name).toBe('Boolean');

  expect(tree.properties.length).toBe(3);
  expect(tree.properties[0].name).toBe('property');
  expect(tree.properties[0].type.name).toBe('String');
  expect(tree.properties[1].name).toBe('anotherProp');
  expect(tree.properties[2].name).toBe('typedValue');
  expect(tree.properties[2].type.name).toBe('Number');

  expect(tree.init).toBeUndefined();

  expect(tree.methods.length).toBe(2);
  expect(tree.methods[0].name).toBe('method');
  expect(tree.methods[0].parameters.length).toBe(0);
  expect(tree.methods[0].body.length).toBe(2);
  expect((tree.methods[0].body[0] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  expect((tree.methods[0].body[1] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  expect(tree.methods[1].name).toBe('location');
  expect(tree.methods[1].parameters.length).toBe(2);
  expect(tree.methods[1].parameters[0].name).toBe('x');
  expect(tree.methods[1].parameters[0].type.name).toBe('Number');
  expect(tree.methods[1].parameters[1].name).toBe('y');
  expect(tree.methods[1].parameters[1].type.name).toBe('Number');
  expect(tree.methods[1].body.length).toBe(1);
  expect((tree.methods[1].body[0] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  const innerMethod = (tree.methods[1].body[0] as ExpressionStatementTree)
    .value as MethodExpressionTree;
  const MethodExpression = innerMethod.object as IdExpressionTree;
  expect(MethodExpression.name).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  expect(tree.operators.length).toBe(1);
  expect(tree.operators[0].name).toBe('+');
  expect(tree.operators[0].parameters[0].name).toBe('it');
  expect(tree.operators[0].parameters[1].name).toBe('sc');
  expect(tree.operators[0].parameters[1].type.name).toBe('SomeClass');
});
