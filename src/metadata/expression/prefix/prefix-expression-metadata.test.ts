import { parseExpression } from '../../../util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  // expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
});
