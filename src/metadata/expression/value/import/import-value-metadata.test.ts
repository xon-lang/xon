import { TestDeclarationScope } from '@/metadata/declaration/scope/test-declaration-scope';
import { ObjectTypeMetadata } from '@/metadata/expression/type/object/object-type-metadata';
import { ImportValueMetadata } from '@/metadata/expression/value/import/import-value-metadata';
import { fillValueMetadata } from '@/metadata/expression/value/value-metadata-helper';
import { parseExpression } from '@/util/parse';

test('literal', () => {
  const code = "import 'src/lib/@xon/core'";
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree) as ImportValueMetadata;

  expect(metadata).toBeInstanceOf(ImportValueMetadata);
  expect(metadata.importScope().declarations.length).toBe(33);
  expect(metadata.type()).toBeInstanceOf(ObjectTypeMetadata);
  expect(metadata.type().attributesScope().declarations.length).toBe(33);
});
