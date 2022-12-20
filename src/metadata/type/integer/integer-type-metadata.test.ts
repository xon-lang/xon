import { CoreDeclarationScope } from '~/metadata/declaration/scope/core/core-declaration-scope';
import { IntegerTypeMetadata } from '~/metadata/type/integer/integer-type-metadata';
import { getTypeMetadata } from '~/metadata/type/type-metadata-helper';
import { parseExpression } from '~/util/parse';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getTypeMetadata(tree) as IntegerTypeMetadata;

  expect(metadata).toBeInstanceOf(IntegerTypeMetadata);
  expect(metadata.attributes().length).toBe(4); // 6
});

// test('float literal', () => {
//   const code = '1.23';
//   const tree = parseExpression(code);
//   tree.scope.parent = new TestDeclarationScope();
//   const metadata = fillTypeMetadata(tree);

//   expect(metadata.scope().declarations.length).toBe(6);
// });

// test('7 is integer', () => {
//   const code = '7';
//   const tree = parseExpression(code);
//   tree.scope.parent = new TestDeclarationScope();
//   const metadata = fillTypeMetadata(tree);

//   const codeInteger = 'Number';
//   const treeInteger = parseExpression(codeInteger);
//   treeInteger.scope.parent = new TestDeclarationScope();
//   const metadataInteger = fillTypeMetadata(treeInteger);

//   const codeFloat = 'Float';
//   const treeFloat = parseExpression(codeFloat);
//   treeFloat.scope.parent = new TestDeclarationScope();
//   const metadataFloat = fillTypeMetadata(treeFloat);

//   expect(metadata.is(metadataInteger)).toBe(true);
//   expect(metadata.is(metadataFloat)).toBe(false);
// });
