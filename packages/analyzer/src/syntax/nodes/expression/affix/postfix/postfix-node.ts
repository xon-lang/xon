import {
  $AffixNode,
  $AnalyzerType,
  AffixNode,
  FormatterContext,
  HighlightContext,
  newSyntaxNode,
  Node,
  nodesRange,
  OperatorNode,
  SemanticContext,
} from '#analyzer';
import {$Type, Brand} from '#core';

export type PostfixNode = AffixNode &
  Brand<'Analyzer.PostfixNode'> & {
    value: Node;
  };

export const $PostfixNode = () => $AnalyzerType<PostfixNode>('PostfixNode', $AffixNode());

export function postfixNode($: $Type, value: Node, operator: OperatorNode): PostfixNode {
  return newSyntaxNode({
    $,
    isHidden: true,
    range: nodesRange(value, operator),

    value,
    operator,
  });
}

// function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
