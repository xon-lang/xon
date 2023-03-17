import { parse } from '~/analysis/parser/parser';
import { TestDeclarationScope } from '~/metadata/declaration/scope/test-declaration-scope';
import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { IdValueMetadata } from '~/metadata/expression/value/id/id-value-metadata';

test('none object', () => {
  const code = 'null';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});

test('none model', () => {
  const code = 'null';
  const tree = parse(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = getExpressionMetadata(tree) as IdValueMetadata;

  expect(metadata).toBeInstanceOf(IdValueMetadata);
  expect(metadata.type().is(tree.scope.core.none.type)).toBe(true);
});
