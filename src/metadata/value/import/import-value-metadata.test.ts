import { parseExpression } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/test-declaration-metadata';
import { getValueMetadata } from '../value-metadata-helper';
import { ImportValueMetadata } from './import-value-metadata';

test('literal', () => {
  const code = "import 'src/lib/@xon/core'";
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata).toBeInstanceOf(ImportValueMetadata);
  expect(metadata.declaration().length).toBe(16);
});
