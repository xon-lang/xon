import { parseExpression } from '../../../ast/util/parse';
import { CoreDeclarationScope } from '../../core-declaration-scope';
import { getExpressionMetadata } from '../expression-metadata-helper';

test('literal', () => {
  const code = '123';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(10);
});

test('literal', () => {
  const code = '1.23';
  const node = parseExpression(code);
  const metadata = getExpressionMetadata(node, new CoreDeclarationScope());

  expect(metadata.attributes().length).toBe(12);
});
