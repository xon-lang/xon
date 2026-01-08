import {$AffixNode, $AnalyzerType, AffixNode, newSyntaxNode, Node, nodesRange, OperatorNode} from '#analyzer';
import {$Type, Brand} from '#core';

export type PrefixNode = AffixNode &
  Brand<'Analyzer.PrefixNode'> & {
    value: Node;
  };

export const $PrefixNode = () => $AnalyzerType<PrefixNode>('PrefixNode', $AffixNode());

export function newPrefixNode($: $Type, operator: OperatorNode, value: Node): PrefixNode {
  return newSyntaxNode({
    $,
    isHidden: true,
    range: nodesRange(operator, value),

    operator,
    value,
  });
}

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
