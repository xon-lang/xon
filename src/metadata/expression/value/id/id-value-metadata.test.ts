import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { IdValueMetadata } from '~/metadata/expression/value/id/id-value-metadata';
import { fillValueMetadata } from '~/metadata/expression/value/value-metadata-helper';
import { parseExpression } from '~/util/parse';

test('none object', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});

test('none model', () => {
  const code = 'null';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});
