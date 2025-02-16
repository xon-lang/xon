import {$AnalyzerType, $SyntaxNode, newSyntaxNode, Node, OperatorNode, SyntaxNode} from '#analyzer';
import {$Type, Brand} from '#typing';

export type PrefixNode = SyntaxNode &
  Brand<'Analyzer.PrefixNode'> & {
    operatorNode: OperatorNode;
    valueNode: Node;
  };

export const $PrefixNode = () => $AnalyzerType<PrefixNode>('PrefixNode', $SyntaxNode());

export function prefixNode($: $Type, operatorNode: OperatorNode, valueNode: Node): PrefixNode {
  return newSyntaxNode({$, canBeExpression: true, operatorNode, valueNode});
}

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = node.operator.text.some(
//     (x) => x.isLetter() || COLON.equals(x) || ASSIGN.equals(x),
//   );
//   analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
// }
