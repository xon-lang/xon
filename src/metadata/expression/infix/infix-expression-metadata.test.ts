import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../scope/test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';
import { InfixExpressionMetadata } from './infix-expression-metadata';

test('integer plus integer', () => {
  const code = '1 + 1';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());
  expect(metadata).toBeInstanceOf(InfixExpressionMetadata);
});
