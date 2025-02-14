import {analyzerPackageType, newSyntaxNode, Node, OperatorNode, SyntaxNode} from '#analyzer';
import {$Type, Brand} from '#typing';

export type InfixNode = SyntaxNode &
  Brand<'Analyzer.InfixNode'> & {
    left: Node;
    operator: OperatorNode;
    right: Node;
  };

export const $InfixNode = analyzerPackageType<InfixNode>('InfixNode', SyntaxNode);

export function infixNode($: $Type, left: Node, operator: OperatorNode, right: Node): InfixNode {
  return newSyntaxNode({$, canBeExpression: true, left, operator, right});
}

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
