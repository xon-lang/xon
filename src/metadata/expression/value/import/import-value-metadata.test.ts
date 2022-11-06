import {
  fillValueMetadata,
  ImportValueMetadata,
  ObjectTypeMetadata,
  TestDeclarationScope,
} from '~/metadata';
import { parseExpression } from '~/util';

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
