import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { ObjectTypeMetadata } from '../../type/object/object-type-metadata';
import { fillValueMetadata } from '../value-metadata-helper';
import { ImportValueMetadata } from './import-value-metadata';

test('literal', () => {
  const code = "import 'src/lib/@xon/core'";
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as ImportValueMetadata;

  expect(metadata).toBeInstanceOf(ImportValueMetadata);
  expect(metadata.importScope().declarations.length).toBe(34);
  expect(metadata.type()).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.type().attributesScope().declarations.length).toBe(34);
});
