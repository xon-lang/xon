// import {
//   $DeclarationStatementNode,
//   HighlightToken,
//   HighlightTokenType,
//   newAnalyzerContext,
//   newCharacterStreamFromText,
//   newHighlightContext,
//   nonHiddenNodeGenerator,
//   parseDeclarationStatementNode,
//   DeclarationStatementNode,
// } from '#analyzer';
// import {ArrayData, newArrayData, newText, Text} from '#common';
// import {is} from '#typing';
// import {expect, test} from 'vitest';

// test('Highlight id token', () => {
//   const text = newText('type a');
//   const tokens = getTypeDeclarationHighlights(text);

//   expect(tokens.count()).toBe(1);
//   expect(tokens.first()?.type).toBe(HighlightTokenType.Type);
// });

// function getTypeDeclarationHighlights(text: Text): ArrayData<HighlightToken> {
//   const source = newCharacterStreamFromText(text);
//   const context = newAnalyzerContext(source);
//   const nodes = newArrayData(nonHiddenNodeGenerator(context));
//   const node = parseDeclarationStatementNode(0, nodes) as DeclarationStatementNode;
//   const highlightContext = newHighlightContext();

//   expect(node).toBeTruthy();
//   expect(is(node, $DeclarationStatementNode())).toBe(true);

//   if (node.highlight) {
//     node.highlight(highlightContext);
//   }

//   return highlightContext.highlights;
// }
