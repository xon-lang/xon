import { parseExpression } from '../../../ast/parse';
import { TestDeclarationScope } from '../../test-declaration-scope';
import { LiteralTypeMetadata } from '../../type/literal/literal-type-metadata';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree, new TestDeclarationScope());

  const type = metadata.type as LiteralTypeMetadata;
  expect(type.name).toBe('Integer');
  expect(type.value).toBe(123);
});
