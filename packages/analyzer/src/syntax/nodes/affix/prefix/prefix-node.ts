import {$AffixNode, $AnalyzerType, AffixNode, newSyntaxNode, Node, OperatorNode} from '#analyzer';
import {$Type, Brand} from '#typing';

export type PrefixNode = AffixNode &
  Brand<'Analyzer.PrefixNode'> & {
    value: Node;
  };

export const $PrefixNode = () => $AnalyzerType<PrefixNode>('PrefixNode', $AffixNode());

export function prefixNode($: $Type, operator: OperatorNode, value: Node): PrefixNode {
  return newSyntaxNode({$, canBeExpression: true, operator, value});
}

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
