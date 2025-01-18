import {
  $SyntaxNode2,
  AnalyzerContext,
  analyzerPackageType,
  CharCloseNode,
  CharContentNode,
  CharOpenNode,
  diagnoseCharNode,
  formatCharNode,
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
  const node: CharNode = newSyntaxNode({
    $: $CharNode,
    openNode,
    contentNode,
    closeNode,
  });

  diagnoseCharNode(context, node);
  formatCharNode(context, node);

  return node;
}
