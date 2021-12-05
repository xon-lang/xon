import { parseDefinition } from '../../parse';
import { IdTypeTree } from '../../type/id/id-type.tree';
import { UnionTypeTree } from '../../type/union/union-type.tree';
import { AliasDefinitionTree } from './alias-definition-tree';

test('number', () => {
  const code = 'type Number: Integer || Float';
  const tree = parseDefinition<AliasDefinitionTree>(code);
  expect(tree).toBeInstanceOf(AliasDefinitionTree);

  expect(tree.id.text).toBe('Number');
  expect(tree.typeParameters.length).toBe(0);
  expect(tree.type).toBeInstanceOf(UnionTypeTree);
  expect(tree.type.toString()).toBe('Integer || Float');
});

test('string map', () => {
  const code = 'type StringMap<T>: Map<String, T>';
  const tree = parseDefinition<AliasDefinitionTree>(code);
  expect(tree).toBeInstanceOf(AliasDefinitionTree);

  expect(tree.id.text).toBe('StringMap');
  expect(tree.typeParameters.length).toBe(1);
  expect(tree.typeParameters[0].id.text).toBe('T');
  expect((tree.type as IdTypeTree).id.text).toBe('Map');
  expect(tree.type.toString()).toBe('Map<String, T>');
});
