import { AbstractAttributeTree } from '../../attribute/abstract/abstract-attribute-tree';
import { MethodAttributeTree } from '../../attribute/method/method-attribute-tree';
import { ValueAttributeTree } from '../../attribute/value/value-attribute-tree';
import { CallExpressionTree } from '../../expression/call/call-expression.tree';
import { IdExpressionTree } from '../../expression/id/id-expression.tree';
import { LiteralExpressionTree } from '../../expression/literal/literal-expression.tree';
import { parseDefinition, parseSourceFile } from '../../parse';
import { SourceTree } from '../../source/source-tree';
import { ExpressionStatementTree } from '../../statement/expression/expression-statement.tree';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { ObjectDefinitionTree } from './object-definition-tree';

test('one scope', () => {
  const tree = parseSourceFile('src/tree/definition/object/object-definition-test-file.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  // expect(tree.definitions.length).toBe(1);
  const definition = tree.definitions[0] as ObjectDefinitionTree;
  expect(definition).toBeInstanceOf(ObjectDefinitionTree);

  expect(definition.id.text).toBe('SomeClass');

  const ancestor = definition.ancestor;
  expect(ancestor.id.text).toBe('Base');
  expect(ancestor.typeArguments.length).toBe(2);
  expect((ancestor.typeArguments[0] as IdTypeTree).id.text).toBe('String');
  expect((ancestor.typeArguments[1] as IdTypeTree).id.text).toBe('Boolean');

  const attrs = definition.attributes;
  const propertyAttribute = attrs[0] as ValueAttributeTree;
  expect(propertyAttribute).toBeInstanceOf(ValueAttributeTree);
  expect(attrs.length).toBe(6);
  expect(propertyAttribute.id.text).toBe('property');
  expect(propertyAttribute.type).toBe(null);
  expect((propertyAttribute.expression as LiteralExpressionTree).literal.value).toBe(123);

  const anotherPropAttribute = attrs[1] as AbstractAttributeTree;
  expect(anotherPropAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(anotherPropAttribute.id.text).toBe('anotherProp');
  expect((anotherPropAttribute.type as IdTypeTree).id.text).toBe('String');

  const typedValueAttribute = attrs[2] as AbstractAttributeTree;
  expect(typedValueAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(typedValueAttribute.id.text).toBe('typedValue');
  expect((typedValueAttribute.type as IdTypeTree).id.text).toBe('Number');

  const methodAttribute = attrs[3] as MethodAttributeTree;
  expect(methodAttribute).toBeInstanceOf(MethodAttributeTree);
  expect(methodAttribute.id.text).toBe('method');
  expect((methodAttribute.type as LambdaTypeTree).parameters.length).toBe(0);
  expect(methodAttribute.body.length).toBe(2);
  expect((methodAttribute.body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  expect((methodAttribute.body[1] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );

  const locationAttribute = attrs[4] as MethodAttributeTree;
  expect(locationAttribute).toBeInstanceOf(MethodAttributeTree);
  expect(locationAttribute.id.text).toBe('location');
  expect((locationAttribute.type as LambdaTypeTree).parameters.length).toBe(2);
  expect((locationAttribute.type as LambdaTypeTree).parameters[0].id.text).toBe('x');
  expect(
    ((locationAttribute.type as LambdaTypeTree).parameters[0].type as IdTypeTree).id.text,
  ).toBe('Number');
  expect((locationAttribute.type as LambdaTypeTree).parameters[1].id.text).toBe('y');
  expect(
    ((locationAttribute.type as LambdaTypeTree).parameters[1].type as IdTypeTree).id.text,
  ).toBe('Number');
  expect(locationAttribute.body.length).toBe(1);
  expect((locationAttribute.body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    CallExpressionTree,
  );
  const innerMethod = (locationAttribute.body[0] as ExpressionStatementTree)
    .expression as CallExpressionTree;
  const callExpression = innerMethod.instance as IdExpressionTree;
  expect(callExpression.id.text).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  const plusAttribute = attrs[5] as MethodAttributeTree;
  expect(plusAttribute).toBeInstanceOf(MethodAttributeTree);
  expect(plusAttribute.id.text).toBe('+');
  const operatorType = plusAttribute.type as LambdaTypeTree;
  expect(operatorType.parameters[0].id.text).toBe('it');
  expect((operatorType.parameters[0].type as IdTypeTree).id.text).toBe('SomeClass');
  expect((operatorType.resultType as IdTypeTree).id.text).toBe('AnotherClass');
});

test('hierarchy', () => {
  const code = 'object Animal\n  Type\n    value: 123\n  value: "hi"';
  const tree = parseDefinition<ObjectDefinitionTree>(code);
  expect(tree).toBeInstanceOf(ObjectDefinitionTree);

  expect(tree.id.text).toBe('Animal');
  expect(tree.attributes.length).toBe(2);
});
