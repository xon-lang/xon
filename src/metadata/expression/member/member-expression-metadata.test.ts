import { parseExpression } from '../../../util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('member', () => {
  const code = 'True.toString';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(0);
});
