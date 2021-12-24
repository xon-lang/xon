import { parseExpression } from '../../../ast/util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('integer plus integer', () => {
  const code = '1 + 1';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new CoreDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect(metadata.type.name).toBe('Integer');
});
