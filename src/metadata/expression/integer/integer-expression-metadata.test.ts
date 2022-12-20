import { getExpressionMetadata } from '~/metadata/expression/expression-metadata-helper';
import { IntegerExpressionMetadata } from '~/metadata/expression/integer/integer-expression-metadata';
import { IntegerTypeMetadata } from '~/metadata/type/integer/integer-type-metadata';
import { parseExpression } from '~/util/parse';

test('integer literal', () => {
  const code = '123';
  const tree = parseExpression(code);
  const metadata = getExpressionMetadata(tree);

  expect(metadata).toBeInstanceOf(IntegerExpressionMetadata);
  expect(metadata.type()).toBeInstanceOf(IntegerTypeMetadata);
});

// test('float literal', () => {
//   const code = '1.23';
//   const tree = parseExpression(code);
//   tree.scope.parent = new TestDeclarationScope();
//   const metadata = getExpressionMetadata(tree);

//   expect(metadata.type().scope().declarations.length).toBe(6);
// });

// test('7 is integer', () => {
//   const code = '7';
//   const tree = parseExpression(code);
//   tree.scope.parent = new TestDeclarationScope();
//   // const scope = new TestDeclarationScope();
//   const metadata = getExpressionMetadata(tree);

//   const codeInteger = 'Number';
//   const treeInteger = parseExpression(codeInteger);
//   treeInteger.scope.parent = new TestDeclarationScope();
//   const metadataInteger = getExpressionMetadata(treeInteger);

//   const codeFloat = 'Float';
//   const treeFloat = parseExpression(codeFloat);
//   treeFloat.scope.parent = new TestDeclarationScope();
//   const metadataFloat = getExpressionMetadata(treeFloat);

//   expect(metadata.type().is(metadataInteger.type())).toBe(true);
//   expect(metadata.type().is(metadataFloat.type())).toBe(false);
// });
