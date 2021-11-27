import { parseExpression } from '../../../tree/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('member', () => {
  const code = 'true.toString()';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.type.declaration.name).toBeInstanceOf('String');
});
