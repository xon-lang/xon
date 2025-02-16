import {$AffixNode, $AnalyzerType, AffixNode, newSyntaxNode, Node, OperatorNode} from '#analyzer';
import {$Type, Brand} from '#typing';

export type PrefixNode = AffixNode &
  Brand<'Analyzer.PrefixNode'> & {
    valueNode: Node;
  };

export const $PrefixNode = () => $AnalyzerType<PrefixNode>('PrefixNode', $AffixNode());

export function prefixNode($: $Type, operatorNode: OperatorNode, valueNode: Node): PrefixNode {
  return newSyntaxNode({$, canBeExpression: true, operatorNode, valueNode});
}

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
