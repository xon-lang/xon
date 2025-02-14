import {$InfixNode, $SyntaxNode2, analyzerPackageType, InfixNode, newSyntaxNode, Node, OperatorNode, SyntaxNode2} from '#analyzer';
import {Brand} from '#typing';

export type PlusInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    left: Node;
    operator: OperatorNode;
    right: Node;
  };

export const $PlusInfixNode = analyzerPackageType<PlusInfixNode>('PlusInfixNode', $InfixNode);

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
