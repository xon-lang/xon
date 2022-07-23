import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillValueMetadata } from '../value-metadata-helper';
import { IdValueMetadata } from './id-value-metadata';

test('none object', () => {
  const code = 'none';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});

test('none model', () => {
  const code = 'None';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});
