import { parseExpression } from '../../../../tree/parse';
import { IdTypeMetadata } from '../../type/id/id-type-metadata';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata.type).toBeInstanceOf(IdTypeMetadata);
  expect((metadata.type as IdTypeMetadata).name).toBe('Integer');
});
