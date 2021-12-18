import { MethodAttributeNode } from '../../attribute/method/method-attribute-node';
import { ValueAttributeNode } from '../../attribute/value/value-attribute-node';
import { IdExpressionNode } from '../../expression/id/id-expression-node';
import { parseSourceFile } from '../../parse';
import { SourceTree } from '../../source/source-tree';
import { InterfaceDefinitionTree } from './interface-definition-tree';

test('interface file', () => {
  const tree = parseSourceFile('src/tree/definition/interface/interface-definition-test-file.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  const definition = tree.definitions[0] as InterfaceDefinitionTree;
  expect(definition).toBeInstanceOf(InterfaceDefinitionTree);

  expect(definition.id.text).toBe('SomeClass');

  const ancestor = definition.ancestors[0] as IdExpressionNode;
  expect(ancestor.id.text).toBe('Base');
  expect(ancestor.generics.length).toBe(2);
  expect((ancestor.generics[0] as IdExpressionNode).id.text).toBe('String');
  expect((ancestor.generics[1] as IdExpressionNode).id.text).toBe('Boolean');

  const attrs = definition.attributes;
  const propertyAttribute = attrs[0] as ValueAttributeNode;
  expect(propertyAttribute).toBeInstanceOf(ValueAttributeNode);
  expect(attrs.length).toBe(6);
  expect(propertyAttribute.id.text).toBe('property');

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

  const locationAttribute = attrs[4] as MethodAttributeNode;
  expect(locationAttribute).toBeInstanceOf(MethodAttributeNode);
  expect(locationAttribute.id.text).toBe('location');
  expect(locationAttribute.parameters.length).toBe(2);
  expect(locationAttribute.parameters[0].id.text).toBe('x');
  expect((locationAttribute.parameters[0].type as IdExpressionNode).id.text).toBe('Number');
  expect(locationAttribute.parameters[1].id.text).toBe('y');
  expect((locationAttribute.parameters[1].type as IdExpressionNode).id.text).toBe('Number');

  const plusAttribute = attrs[5] as MethodAttributeNode;
  expect(plusAttribute).toBeInstanceOf(MethodAttributeNode);
  expect(plusAttribute.id.text).toBe('+');
  expect(plusAttribute.parameters[0].id.text).toBe('it');
  expect((plusAttribute.parameters[0].type as IdExpressionNode).id.text).toBe('SomeClass');
  expect((plusAttribute.resultType as IdExpressionNode).id.text).toBe('AnotherClass');
});

test('string core', () => {
  const tree = parseSourceFile('ast.xon/lib/@xon/core/string.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  expect(tree.definitions.length).toBe(1);
  expect(tree.definitions[0]).toBeInstanceOf(InterfaceDefinitionTree);
  expect(tree.definitions[0].id.text).toBe('String');
});
