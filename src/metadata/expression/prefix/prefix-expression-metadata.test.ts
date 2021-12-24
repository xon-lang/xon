import { parseExpression } from '../../../ast/util/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('prefix', () => {
  const code = '+1';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
});
