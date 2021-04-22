import { DefinitionTree } from '../../tree/definition/definition.tree';
import { parseDefinition } from '../../tree/parse';
import { createPlainType } from '../../tree/type/type-tree.helper';
import { clearScopes } from '../id-scope';
import { getDefinitionInference } from './definition-inference.helper';

test('has one statement no generics', () => {
  const code = 'Animal:\n    weigh Integer';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  clearScopes();
  const inference = getDefinitionInference(tree, new Map());
  expect(inference.properties[0].type.toString()).toBe('Integer');
});

test('has one statement with generics', () => {
  const code = 'Animal<T>:\n    eat(food T) null';
  const tree = parseDefinition(code);
  expect(tree).toBeInstanceOf(DefinitionTree);

  clearScopes();
  const inference = getDefinitionInference(tree, new Map([['T', createPlainType('Grass')]]));
  expect(inference.methods[0].parameters[0].type.toString()).toBe('Grass');
  expect(inference.methods[0].returnType.toString()).toBe('null');
});
