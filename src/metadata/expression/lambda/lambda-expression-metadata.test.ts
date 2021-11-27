import { parseExpression } from '../../../tree/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { FunctionTypeMetadata } from '../../type/function/function-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('lambda', () => {
  const code = '(x String): x + x';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(FunctionTypeMetadata);
});
