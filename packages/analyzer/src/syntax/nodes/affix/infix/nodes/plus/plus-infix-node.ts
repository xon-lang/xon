import {$AnalyzerType, $InfixNode, InfixNode, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type PlusInfixNode = InfixNode &
  Brand<'Analyzer.PlusInfixNode'> & {
    // todo use 'PlusOperatorNode' instead of 'OperatorNode'
    operator: OperatorNode;
  };

export const $PlusInfixNode = () => $AnalyzerType<PlusInfixNode>('PlusInfixNode', $InfixNode());

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
