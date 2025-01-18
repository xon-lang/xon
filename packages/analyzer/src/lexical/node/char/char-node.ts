import {
  $SyntaxNode2,
  AnalyzerContext,
  analyzerPackageType,
  CHAR_CLOSE,
  CharCloseNode,
  CharContentNode,
  CharOpenNode,
  newSyntaxNode,
  SyntaxNode2,
} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CharNode = SyntaxNode2 &
  Brand<'Analyzer.CharNode'> & {
    openNode: CharOpenNode;
    contentNode?: CharContentNode | Nothing;
    closeNode?: CharCloseNode | Nothing;
  };

export const $CharNode = analyzerPackageType<CharNode>('CharNode', $SyntaxNode2);

export function newCharNode(
  context: AnalyzerContext,
  openNode: CharOpenNode,
  contentNode?: CharContentNode | Nothing,
  closeNode?: CharCloseNode | Nothing,
): CharNode {
  if (!contentNode) {
    context.addDiagnostic(openNode.range, (x) => x.expectCloseToken(CHAR_CLOSE));
  }

  return newSyntaxNode({
    $: $CharNode,
    openNode,
    contentNode,
    closeNode,
  });
}
