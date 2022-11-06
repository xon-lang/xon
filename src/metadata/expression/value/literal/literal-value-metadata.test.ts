import { fillValueMetadata, TestDeclarationScope } from '~/metadata';
import { parseExpression } from '~/util';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata.type().attributesScope().declarations.length).toBe(6);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  expect(metadata.type().attributesScope().declarations.length).toBe(6);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  tree.scope.parent = new TestDeclarationScope();
  // const scope = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree);

  const codeInteger = 'Number';
  const treeInteger = parseExpression(codeInteger);
  treeInteger.scope.parent = new TestDeclarationScope();
  const metadataInteger = fillValueMetadata(treeInteger);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  treeFloat.scope.parent = new TestDeclarationScope();
  const metadataFloat = fillValueMetadata(treeFloat);

  expect(metadata.type().is(metadataInteger.type())).toBe(true);
  expect(metadata.type().is(metadataFloat.type())).toBe(false);
});
