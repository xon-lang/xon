import { DefinitionTree } from '../../tree/definition/definition.tree';
import { parseDefinition } from '../../tree/parse';
import { createPlainType } from '../../tree/type/type-helper';
import { fillDefinitionTypes } from './definition-type.helper';

test('has one statement no generics', () => {
  const code = 'Animal:\n    weigh Integer';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  fillDefinitionTypes(tree, new Map());
  expect(tree.properties[0].type.toString()).toBe('Integer');
});

test('has one statement with generics', () => {
  const code = 'Animal<T>:\n    eat(food T)';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  fillDefinitionTypes(tree, new Map([['T', createPlainType('Meat')]]));
  expect(tree.methods[0].parameters[0].type.toString()).toBe('Meat');
});
