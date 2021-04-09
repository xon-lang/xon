import * as fs from 'fs';
import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { MethodExpressionTree } from '../expression/method-expression/method-expression.tree';
import { parseDefinition } from '../parse';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { GenericTypeTree } from '../type/generic-type/generic-type.tree';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';
import { DefinitionTree } from './definition.tree';

test('one scope', () => {
  const code = fs.readFileSync('src/tree/definition/definition.test.xon').toString();
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  expect(tree.name).toBe('SomeClass');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name).toBe('name');
  expect((tree.parameters[0].type as PlainTypeTree).name).toBe('String');

  expect((tree.inheritanceType as GenericTypeTree).name).toBe('BaseClass');
  expect((tree.inheritanceType as GenericTypeTree).generics.length).toBe(2);
  expect(((tree.inheritanceType as GenericTypeTree).generics[0] as PlainTypeTree).name).toBe(
    'String',
  );
  expect(((tree.inheritanceType as GenericTypeTree).generics[1] as PlainTypeTree).name).toBe(
    'Boolean',
  );

  expect(tree.properties.length).toBe(3);
  expect(tree.properties[0].name).toBe('property');
  expect((tree.properties[0].type as PlainTypeTree).name).toBe('String');
  expect(tree.properties[1].name).toBe('anotherProp');
  expect(tree.properties[2].name).toBe('typedValue');
  expect((tree.properties[2].type as PlainTypeTree).name).toBe('Number');

  expect(tree.inits.length).toBe(0);

  expect(tree.methods.length).toBe(2);
  expect(tree.methods[0].name).toBe('method');
  expect(tree.methods[0].parameters.length).toBe(0);
  expect(tree.methods[0].statements.length).toBe(2);
  expect((tree.methods[0].statements[0] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  expect((tree.methods[0].statements[1] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  expect(tree.methods[1].name).toBe('location');
  expect(tree.methods[1].parameters.length).toBe(2);
  expect(tree.methods[1].parameters[0].name).toBe('x');
  expect((tree.methods[1].parameters[0].type as PlainTypeTree).name).toBe('Number');
  expect(tree.methods[1].parameters[1].name).toBe('y');
  expect((tree.methods[1].parameters[1].type as PlainTypeTree).name).toBe('Number');
  expect(tree.methods[1].statements.length).toBe(1);
  expect((tree.methods[1].statements[0] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  const innerMethod = (tree.methods[1].statements[0] as ExpressionStatementTree)
    .value as MethodExpressionTree;
  const MethodExpression = innerMethod.object as IdExpressionTree;
  expect(MethodExpression.name).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  expect(tree.operators.length).toBe(1);
  expect(tree.operators[0].name).toBe('+');
  expect(tree.operators[0].parameters[0].name).toBe('it');
  expect(tree.operators[0].parameters[1].name).toBe('sc');
  expect((tree.operators[0].parameters[1].type as PlainTypeTree).name).toBe('SomeClass');
});
