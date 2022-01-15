import { parseExpression } from '../../../util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(10);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(12);
});
