import {$AnalyzerType, $PostfixNode, ExclamationOperatorNode, ExpressionNode, PostfixNode} from '#analyzer';
import {Brand} from '#core';

export type ExclamationPostfixNode = PostfixNode &
  Brand<'Analyzer.ExclamationPostfixNode'> & {
    operator: ExclamationOperatorNode;
    expression: ExpressionNode;
  };

export const $ExclamationPostfixNode = () =>
  $AnalyzerType<ExclamationPostfixNode>('ExclamationPostfixNode', $PostfixNode());

// function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
//   const keepSingleWhitespace = !node.operator.getText().equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
