import { AbstractAttributeTree } from '../../attribute/abstract/abstract-attribute-tree';
import { parseSourceFile } from '../../parse';
import { SourceTree } from '../../source/source-tree';
import { LambdaTypeTree } from '../../type/lambda/lambda-type.tree';
import { InterfaceDefinitionTree } from './interface-definition-tree';

test('interface file', () => {
  const tree = parseSourceFile('src/tree/definition/interface/interface-definition-test-file.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  // expect(tree.definitions.length).toBe(1);
  const definition = tree.definitions[0] as InterfaceDefinitionTree;
  expect(definition).toBeInstanceOf(InterfaceDefinitionTree);

  expect(definition.id.text).toBe('SomeClass');

  const ancestor = definition.ancestor;
  expect(ancestor.id.text).toBe('Base');
  expect(ancestor.typeArguments.length).toBe(2);
  expect(ancestor.typeArguments[0].name).toBe('String');
  expect(ancestor.typeArguments[1].name).toBe('Boolean');
  expect(definition.ancestor.arguments.length).toBe(0);

  const attrs = definition.attributes;
  const propertyAttribute = attrs[0] as AbstractAttributeTree;
  expect(propertyAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(attrs.length).toBe(6);
  expect(propertyAttribute.id.text).toBe('property');

  const anotherPropAttribute = attrs[1] as AbstractAttributeTree;
  expect(anotherPropAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(anotherPropAttribute.id.text).toBe('anotherProp');
  expect(anotherPropAttribute.type.name).toBe('String');

  const typedValueAttribute = attrs[2] as AbstractAttributeTree;
  expect(typedValueAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(typedValueAttribute.id.text).toBe('typedValue');
  expect(typedValueAttribute.type.name).toBe('Number');

  const methodAttribute = attrs[3] as AbstractAttributeTree;
  expect(methodAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(methodAttribute.id.text).toBe('method');
  expect((methodAttribute.type as LambdaTypeTree).parameters.length).toBe(0);

  const locationAttribute = attrs[4] as AbstractAttributeTree;
  expect(locationAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(locationAttribute.id.text).toBe('location');
  expect((locationAttribute.type as LambdaTypeTree).parameters.length).toBe(2);
  expect((locationAttribute.type as LambdaTypeTree).parameters[0].id.text).toBe('x');
  expect((locationAttribute.type as LambdaTypeTree).parameters[0].type.name).toBe('Number');
  expect((locationAttribute.type as LambdaTypeTree).parameters[1].id.text).toBe('y');
  expect((locationAttribute.type as LambdaTypeTree).parameters[1].type.name).toBe('Number');

  const plusAttribute = attrs[5] as AbstractAttributeTree;
  expect(plusAttribute).toBeInstanceOf(AbstractAttributeTree);
  expect(plusAttribute.id.text).toBe('+');
  const operatorType = plusAttribute.type as LambdaTypeTree;
  expect(operatorType.parameters[0].id.text).toBe('it');
  expect(operatorType.parameters[0].type.name).toBe('SomeClass');
  expect(operatorType.resultType.name).toBe('AnotherClass');
});

test('string core', () => {
  const tree = parseSourceFile('ast.xon/lib/@xon/core/string.xon');
  expect(tree).toBeInstanceOf(SourceTree);

  expect(tree.definitions.length).toBe(1);
  expect(tree.definitions[0]).toBeInstanceOf(InterfaceDefinitionTree);
  expect(tree.definitions[0].id.text).toBe('String');
});
