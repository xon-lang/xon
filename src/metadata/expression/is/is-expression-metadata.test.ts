import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { IsExpressionMetadata } from './is-expression-metadata';

test('integer plus integer', () => {
  const code = '1 is Number';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(IsExpressionMetadata);

  const codeBoolean = 'Boolean';
  const treeBoolean = parseExpression(codeBoolean);
  const metadataBoolean = getExpressionMetadata(treeBoolean, new TestDeclarationScope());

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getExpressionMetadata(treeFloat, new TestDeclarationScope());

  expect(metadata.is(metadataBoolean)).toBe(true);
  expect(metadata.is(metadataFloat)).toBe(false);
});
