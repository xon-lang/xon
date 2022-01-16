import { parseExpression } from '../../../util/parse';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  // expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
});
