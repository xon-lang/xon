import { parseSource } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { SourceMetadata } from '../../source/source-metadata';
import { getSourceMetadata } from '../../source/source-metadata-helper';

test('single parameter', () => {
  const code = 'a: 132';
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(scope.declarations.length).toBe(1);
  expect(scope.find('a').name).toBe('a');
});

// todo implement it
test('multiple parameters', () => {
  const code = '{a, b, c} = [1, 2, 3]';
  const tree = parseSource(code);
  const scope = new TestDeclarationScope();
  const metadata = getSourceMetadata(tree, scope);

  expect(metadata).toBeInstanceOf(SourceMetadata);
  expect(scope.declarations.length).toBe(3);
  expect(scope.find('a').name).toBe('a');
  expect(scope.find('b').name).toBe('b');
  expect(scope.find('c').name).toBe('c');
});
