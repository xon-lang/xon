import { parseExpression, parseSource } from '../../../util/parse';
import { TestDeclarationScope } from '../../declaration/scope/test-declaration-scope';
import { getSourceMetadata } from '../../source/source-metadata-helper';
import { getValueMetadata } from '../value-metadata-helper';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata.type().attributesScope().declarations.length).toBe(1);
});

test('float literal', () => {
  const code = '1.23';
  const tree = parseExpression(code);
  const metadata = getValueMetadata(tree, new TestDeclarationScope());

  expect(metadata.type().attributesScope().declarations.length).toBe(2);
});

test('7 is integer', () => {
  const code = '7';
  const tree = parseExpression(code);
  const scope = new TestDeclarationScope();
  const metadata = getValueMetadata(tree, scope);

  const codeInteger = 'Number';
  const treeInteger = parseExpression(codeInteger);
  const metadataInteger = getValueMetadata(treeInteger, scope);

  const codeFloat = 'Float';
  const treeFloat = parseExpression(codeFloat);
  const metadataFloat = getValueMetadata(treeFloat, scope);

  expect(metadata.type().is(metadataInteger.type())).toBe(true);
  expect(metadata.type().is(metadataFloat.type())).toBe(false);
});
