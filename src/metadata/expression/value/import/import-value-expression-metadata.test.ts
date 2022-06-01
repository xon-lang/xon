import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueExpressionMetadata } from '../value-expression-metadata-helper';
import { ImportValueExpressionMetadata } from './import-value-expression-metadata';

test('literal', () => {
  const code = "import 'src/lib/@xon/core'";
  const tree = parseExpression(code);
  const metadata = getValueExpressionMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ImportValueExpressionMetadata);
  expect(metadata.declaration().length).toBe(16);
});
