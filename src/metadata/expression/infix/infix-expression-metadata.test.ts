import { parseExpression } from '../../../ast/util/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('integer plus integer', () => {
  const code = '1 + 1';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.type.name).toBe('Integer');
});
