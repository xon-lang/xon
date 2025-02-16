import {$AnalyzerType, $PrefixNode, Node, OperatorNode, PrefixNode} from '#analyzer';
import {Brand} from '#typing';

export type PlusPrefixNode = PrefixNode &
  Brand<'Analyzer.PlusPrefixNode'> & {
    operatorNode: OperatorNode;
    valueNode: Node;
  };

export const $PlusPrefixNode = () => $AnalyzerType<PlusPrefixNode>('PlusPrefixNode', $PrefixNode());

// function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
