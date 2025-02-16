import {$AffixNode, $AnalyzerType, AffixNode, newSyntaxNode, Node, OperatorNode} from '#analyzer';
import {$Type, Brand} from '#typing';

export type InfixNode = AffixNode &
  Brand<'Analyzer.InfixNode'> & {
    leftNode: Node;
    rightNode: Node;
  };

export const $InfixNode = () => $AnalyzerType<InfixNode>('InfixNode', $AffixNode());

export function infixNode($: $Type, leftNode: Node, operatorNode: OperatorNode, rightNode: Node): InfixNode {
  return newSyntaxNode({$, canBeExpression: true, leftNode, operatorNode, rightNode});
}

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
