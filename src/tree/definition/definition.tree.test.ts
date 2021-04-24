import { IdExpressionTree } from '../expression/id-expression/id-expression.tree';
import { MethodExpressionTree } from '../expression/method-expression/method-expression.tree';
import { parseProgramFromFile } from '../parse';
import { ProgramTree } from '../program/program.tree';
import { ExpressionStatementTree } from '../statement/expression-statement/expression-statement.tree';
import { PlainTypeTree } from '../type/plain-type/plain-type.tree';

test('one scope', () => {
  const tree = parseProgramFromFile('src/tree/definition/definition.test.xon');
  expect(tree).toBeInstanceOf(ProgramTree);

  expect(tree.definitions.length).toBe(1);
  const definition = tree.definitions[0];

  expect(definition.name).toBe('SomeClass');
  expect(definition.declaredGenerics.length).toBe(1);
  expect(definition.declaredGenerics[0]).toBe('T');

  expect(definition.parameters.length).toBe(1);
  expect(definition.parameters[0].name).toBe('name');
  expect(definition.parameters[0].type.name).toBe('String');

  expect(definition.inheritanceType.name).toBe('BaseClass');
  expect((definition.inheritanceType as PlainTypeTree).generics.length).toBe(2);
  expect((definition.inheritanceType as PlainTypeTree).generics[0].name).toBe('String');
  expect((definition.inheritanceType as PlainTypeTree).generics[1].name).toBe('Boolean');

  expect(definition.properties.length).toBe(3);
  expect(definition.properties[0].name).toBe('property');
  expect(definition.properties[0].type.name).toBe('String');
  expect(definition.properties[1].name).toBe('anotherProp');
  expect(definition.properties[2].name).toBe('typedValue');
  expect(definition.properties[2].type.name).toBe('Number');

  expect(definition.init).toBeUndefined();

  expect(definition.methods.length).toBe(2);
  expect(definition.methods[0].name).toBe('method');
  expect(definition.methods[0].parameters.length).toBe(0);
  expect(definition.methods[0].body.length).toBe(2);
  expect((definition.methods[0].body[0] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  expect((definition.methods[0].body[1] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  expect(definition.methods[1].name).toBe('location');
  expect(definition.methods[1].parameters.length).toBe(2);
  expect(definition.methods[1].parameters[0].name).toBe('x');
  expect(definition.methods[1].parameters[0].type.name).toBe('Number');
  expect(definition.methods[1].parameters[1].name).toBe('y');
  expect(definition.methods[1].parameters[1].type.name).toBe('Number');
  expect(definition.methods[1].body.length).toBe(1);
  expect((definition.methods[1].body[0] as ExpressionStatementTree).value).toBeInstanceOf(
    MethodExpressionTree,
  );
  const innerMethod = (definition.methods[1].body[0] as ExpressionStatementTree)
    .value as MethodExpressionTree;
  const MethodExpression = innerMethod.object as IdExpressionTree;
  expect(MethodExpression.name).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  expect(definition.operators.length).toBe(1);
  expect(definition.operators[0].name).toBe('+');
  expect(definition.operators[0].parameters[0].name).toBe('it');
  expect(definition.operators[0].parameters[1].name).toBe('sc');
  expect(definition.operators[0].parameters[1].type.name).toBe('SomeClass');
});
