import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { ParameterTypeMetadata } from '@/metadata/expression/type/parameter/parameter-type-metadata';
import { fillTypeMetadata } from '@/metadata/expression/type/type-metadata-helper';
import { parseExpression } from '@/util/parse';

test('true', () => {
  const code = 'true';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree) as ParameterTypeMetadata;

  expect(metadata.attributesScope().all().length).toBe(3);
});

test('false is Boolean', () => {
  const code = 'false';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillTypeMetadata(tree);

  const codeBoolean = 'Boolean';
  const treeBoolean = parseExpression(codeBoolean);
  treeBoolean.scope.parent = new TestDeclarationScope();
  const metadataBoolean = fillTypeMetadata(treeBoolean);

  const codeInteger = 'Integer';
  const treeInteger = parseExpression(codeInteger);
  treeInteger.scope.parent = new TestDeclarationScope();
  const metadataFloat = fillTypeMetadata(treeInteger);

  expect(metadata.is(metadataBoolean)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
