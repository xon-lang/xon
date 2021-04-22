import { DefinitionTree } from '../../tree/definition/definition.tree';
import { parseDefinition } from '../../tree/parse';
import { createPlainType } from '../../tree/type/type-helper';
import { clearScopes } from '../id-scope';
import { fillDefinitionTypes } from './definition-inference.helper';

test('has one statement no generics', () => {
  const code = 'Animal:\n    weigh Integer';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  clearScopes();
  fillDefinitionTypes(tree, new Map());
  expect(tree.properties[0].type.toString()).toBe('Integer');
});

test('has one statement with generics', () => {
  const code = 'Animal<T>:\n    eat(food T) null';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  clearScopes();
  fillDefinitionTypes(tree, new Map([['T', createPlainType('Grass')]]));
  expect(tree.methods[0].parameters[0].type.toString()).toBe('Grass');
  expect(tree.methods[0].returnType.toString()).toBe('null');
});
