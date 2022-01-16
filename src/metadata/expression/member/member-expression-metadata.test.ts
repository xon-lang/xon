import { parseExpression } from '../../../util/parse';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('member', () => {
  const code = 'True.toString';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.attributes().length).toBe(0);
});
