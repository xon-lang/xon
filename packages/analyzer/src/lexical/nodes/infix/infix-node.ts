import {$SyntaxNode2, analyzerPackageType, newSyntaxNode, Node, OperatorNode, SyntaxNode2} from '#analyzer';
import {Brand} from '#typing';

export type InfixNode = SyntaxNode2 &
  Brand<'Analyzer.InfixNode'> & {
    left: Node;
    operator: OperatorNode;
    right: Node;
  };

export const $InfixNode = analyzerPackageType<InfixNode>('InfixNode', $SyntaxNode2);

export function infixNode(left: Node, operator: OperatorNode, right: Node): InfixNode {
  return newSyntaxNode({$: $InfixNode, left, operator, right});
}

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
