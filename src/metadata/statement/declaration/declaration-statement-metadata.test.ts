import { parseSource } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';

test('single parameter', () => {
  const code = 'a: 132';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(tree.scope.declarations.length).toBe(1);
  expect(tree.scope.filter('a')[0].name).toBe('a');
});

// todo implement it
test('multiple parameters', () => {
  const code = '{a, b, c} = [1, 2, 3]';
  const tree = parseSource(code);
  tree.scope.parent = new TestDeclarationScope();
  tree.metadata = getSourceMetadata(tree);

  expect(tree.metadata).toBeInstanceOf(SourceMetadata);
  expect(tree.scope.declarations.length).toBe(3);
  expect(tree.scope.filter('a')[0].name).toBe('a');
  expect(tree.scope.filter('b')[0].name).toBe('b');
  expect(tree.scope.filter('c')[0].name).toBe('c');
});
