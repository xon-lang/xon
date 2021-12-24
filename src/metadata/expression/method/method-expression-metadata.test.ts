import { parseExpression } from '../../../ast/util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { LambdaTypeMetadata } from '../../type/lambda/lambda-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('lambda', () => {
  const code = '(x String): x + x';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new CoreDeclarationScope());

  expect(metadata.type).toBeInstanceOf(LambdaTypeMetadata);
});
