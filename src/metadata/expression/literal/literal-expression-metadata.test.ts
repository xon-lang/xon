import { parseExpression } from '../../../ast/util/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('literal', () => {
  const code = '123';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new TestDeclarationScope());

  const type = metadata.type as LiteralTypeMetadata;
  expect(type.name).toBe('Integer');
  expect(type.value).toBe(123);
});
