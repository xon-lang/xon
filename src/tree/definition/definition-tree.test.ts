import { none } from '../../lib/core';
import { parseDefinition } from '../../util/parse';
import { GenericsExpressionTree } from '../expression/generics/generics-expression-tree';
import { IdExpressionTree } from '../expression/id/id-expression-tree';
import { ParameterTree } from '../parameter/parameter-tree';
import { DeclarationStatementTree } from '../statement/declaration/declaration-statement-tree';
import { DefinitionTree } from './definition-tree';

test('model animal', () => {
  const code = 'model Animal';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(null);
  expect(tree.attributes.length).toBe(0);
});

test('object with parameters', () => {
  const code = 'object Cat(name: String) is Animal';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('object');
  expect(tree.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.parameters.length).toBe(1);
  expect(tree.parameters[0].name.text).toBe('name');
  expect((tree.parameters[0].type as IdExpressionTree).name.text).toBe('String');
  expect(tree.attributes.length).toBe(0);
});

test('model cat', () => {
  const code = 'model Cat is Animal';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect((tree.base as IdExpressionTree).name.text).toBe('Animal');
  expect(tree.attributes.length).toBe(0);
});

test('model animal with only attribute', () => {
  const code = 'model Animal\n   abc: Integer';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Animal');
  expect(tree.base).toBe(none);
  expect(tree.attributes.length).toBe(1);

  const attributes = tree.attributes.map(
    (x) => (x as DeclarationStatementTree).declaration as ParameterTree,
  );
  expect(attributes[0].name.text).toBe('abc');
  expect((attributes[0].type as IdExpressionTree).name.text).toBe('Integer');
});

test('model cat with generics', () => {
  const code = 'model Cat<T: Number> is Animal<T, Integer>';
  const tree = parseDefinition(code) as DefinitionTree;

  expect(tree).toBeInstanceOf(DefinitionTree);
  expect(tree.modifier.text).toBe('model');
  expect(tree.name.text).toBe('Cat');
  expect(tree.generics.length).toBe(1);
  expect(tree.generics[0].name.text).toBe('T');
  expect((tree.generics[0].type as IdExpressionTree).name.text).toBe('Number');
  expect(((tree.base as GenericsExpressionTree).expression as IdExpressionTree).name.text).toBe(
    'Animal',
  );
  expect((tree.base as GenericsExpressionTree).generics.length).toBe(2);
  expect(((tree.base as GenericsExpressionTree).generics[0] as IdExpressionTree).name.text).toBe(
    'T',
  );
  expect(((tree.base as GenericsExpressionTree).generics[1] as IdExpressionTree).name.text).toBe(
    'Integer',
  );
  expect(tree.attributes.length).toBe(0);
});
