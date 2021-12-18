import { MethodAttributeNode } from '../../attribute/method/method-attribute-node';
import { ValueAttributeNode } from '../../attribute/value/value-attribute-node';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { InvokeExpressionNode } from '../../expression/invoke/invoke-expression-node';
import { LiteralExpressionNode } from '../../expression/literal/literal-expression-node';
import { parseDefinition, parseSourceFile } from '../../parse';
import { SourceTree } from '../../source/source-tree';
import { ExpressionStatementTree } from '../../statement/expression/expression-statement.tree';
import { ClassDefinitionTree } from './class-definition-tree';

test('one scope', () => {
  const tree = parseSourceFile('src/tree/definition/class/class-definition-test-file.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  // expect(tree.definitions.length).toBe(1);
  const definition = tree.definitions[0] as ClassDefinitionTree;
  expect(definition).toBeInstanceOf(ClassDefinitionTree);

  expect(definition.id.text).toBe('SomeClass');

  const ancestor = definition.ancestors[0] as IdExpressionNode;
  expect(ancestor.id.text).toBe('Base');
  expect(ancestor.generics.length).toBe(2);
  expect((ancestor.generics[0] as IdExpressionNode).id.text).toBe('String');
  expect((ancestor.generics[1] as IdExpressionNode).id.text).toBe('Boolean');

  const attrs = definition.attributes;
  console.log(attrs.join(',\n'));
  expect(attrs.length).toBe(6);

  const propertyAttribute = attrs[0] as ValueAttributeNode;
  expect(propertyAttribute).toBeInstanceOf(ValueAttributeNode);
  expect(propertyAttribute.id.text).toBe('property');
  expect(propertyAttribute.type).toBe(null);
  expect((propertyAttribute.value as LiteralExpressionNode).literal.value).toBe(123);

  const anotherPropAttribute = attrs[1] as ValueAttributeNode;
  expect(anotherPropAttribute).toBeInstanceOf(ValueAttributeNode);
  expect(anotherPropAttribute.id.text).toBe('anotherProp');
  expect((anotherPropAttribute.type as IdExpressionNode).id.text).toBe('String');

  const typedValueAttribute = attrs[2] as ValueAttributeNode;
  expect(typedValueAttribute).toBeInstanceOf(ValueAttributeNode);
  expect(typedValueAttribute.id.text).toBe('typedValue');
  expect((typedValueAttribute.type as IdExpressionNode).id.text).toBe('Number');

  const methodAttribute = attrs[3] as MethodAttributeNode;
  expect(methodAttribute).toBeInstanceOf(MethodAttributeNode);
  expect(methodAttribute.id.text).toBe('method');
  expect(methodAttribute.parameters.length).toBe(0);
  expect(methodAttribute.body.length).toBe(2);
  expect((methodAttribute.body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    InvokeExpressionNode,
  );
  expect((methodAttribute.body[1] as ExpressionStatementTree).expression).toBeInstanceOf(
    InvokeExpressionNode,
  );

  const locationAttribute = attrs[4] as MethodAttributeNode;
  expect(locationAttribute).toBeInstanceOf(MethodAttributeNode);
  expect(locationAttribute.id.text).toBe('location');
  expect(locationAttribute.parameters.length).toBe(2);
  expect(locationAttribute.parameters[0].id.text).toBe('x');
  expect((locationAttribute.parameters[0].type as IdExpressionNode).id.text).toBe('Number');
  expect(locationAttribute.parameters[1].id.text).toBe('y');
  expect((locationAttribute.parameters[1].type as IdExpressionNode).id.text).toBe('Number');
  expect(locationAttribute.body.length).toBe(1);
  expect((locationAttribute.body[0] as ExpressionStatementTree).expression).toBeInstanceOf(
    InvokeExpressionNode,
  );
  const innerMethod = (locationAttribute.body[0] as ExpressionStatementTree)
    .expression as InvokeExpressionNode;
  const callExpression = innerMethod.instance as IdExpressionNode;
  expect(callExpression.id.text).toBe('pos');
  expect(innerMethod.arguments.length).toBe(2);

  const plusAttribute = attrs[5] as MethodAttributeNode;
  expect(plusAttribute).toBeInstanceOf(MethodAttributeNode);
  expect(plusAttribute.id.text).toBe('+');
  expect(plusAttribute.parameters[0].id.text).toBe('it');
  expect((plusAttribute.parameters[0].type as IdExpressionNode).id.text).toBe('SomeClass');
  expect((plusAttribute.resultType as IdExpressionNode).id.text).toBe('AnotherClass');
});

test('class with 2 attributes', () => {
  const code = `class A()\n  method() MyType\n    hello()`;
  const tree = parseDefinition<ClassDefinitionTree>(code);
  expect(tree).toBeInstanceOf(ClassDefinitionTree);

  expect(tree.attributes.length).toBe(1);
});
