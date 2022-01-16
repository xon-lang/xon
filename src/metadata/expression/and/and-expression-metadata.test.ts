import { parseExpression } from '../../../util/parse';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { AndExpressionMetadata } from './and-expression-metadata';

test('integer plus integer', () => {
  const code = '1 && 1';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(AndExpressionMetadata);
});
