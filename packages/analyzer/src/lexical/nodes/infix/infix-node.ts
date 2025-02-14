import {$SyntaxNode2, analyzerPackageType, newSyntaxNode, Node2, OperatorNode, SyntaxNode2} from '#analyzer';
import {$Type, Brand} from '#typing';

export type InfixNode = SyntaxNode2 &
  Brand<'Analyzer.InfixNode'> & {
    left: Node2;
    operator: OperatorNode;
    right: Node2;
  };

export const $InfixNode = analyzerPackageType<InfixNode>('InfixNode', $SyntaxNode2);

export function infixNode($: $Type, left: Node2, operator: OperatorNode, right: Node2): InfixNode {
  return newSyntaxNode({$, canBeExpression: true, left, operator, right});
}

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
