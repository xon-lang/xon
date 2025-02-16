import {$AnalyzerType, $PostfixNode, Node, OperatorNode, PostfixNode} from '#analyzer';
import {Brand} from '#typing';

export type ExclamationPostfixNode = PostfixNode &
  Brand<'Analyzer.ExclamationPostfixNode'> & {
    operatorNode: OperatorNode;
    valueNode: Node;
  };

export const $ExclamationPostfixNode = () =>
  $AnalyzerType<ExclamationPostfixNode>('ExclamationPostfixNode', $PostfixNode());

// function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
