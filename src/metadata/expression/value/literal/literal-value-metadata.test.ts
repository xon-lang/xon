import { parseExpression } from '../../../../util/parse';
import { TestDeclarationScope } from '../../../declaration/scope/test-declaration-scope';
import { fillValueMetadata } from '../value-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = fillValueMetadata(tree, new TestDeclarationScope());

  expect(metadata.type().attributesScope().declarations.length).toBe(1);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = fillValueMetadata(tree, new TestDeclarationScope());

  expect(metadata.type().attributesScope().declarations.length).toBe(2);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = fillValueMetadata(tree, scope);

  const codeInteger = 'Number';
  const treeInteger = parseExpression(codeInteger);
  const metadataInteger = fillValueMetadata(treeInteger, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = fillValueMetadata(treeFloat, scope);

  expect(metadata.type().is(metadataInteger.type())).toBe(true);
  expect(metadata.type().is(metadataFloat.type())).toBe(false);
});
