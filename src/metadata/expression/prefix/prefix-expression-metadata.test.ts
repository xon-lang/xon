import { parseExpression } from '../../../ast/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('prefix', () => {
  const code = '+1';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
});
