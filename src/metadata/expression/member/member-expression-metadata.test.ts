import { parseExpression } from '../../../ast/util/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('member', () => {
  const code = 'true.toString()';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.type.declaration.name).toBe('String');
});
