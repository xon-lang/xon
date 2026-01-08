import {$AnalyzerType, $PrefixNode, Node, OperatorNode, PrefixNode} from '#analyzer';
import {Brand} from '#core';

// todo remove and use enum
export type PlusPrefixNode = PrefixNode &
  Brand<'Analyzer.PlusPrefixNode'> & {
    operatorNode: OperatorNode;
    valueNode: Node;
  };

export const $PlusPrefixNode = () => $AnalyzerType<PlusPrefixNode>('PlusPrefixNode', $PrefixNode());

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = !node.operator.getText().equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
