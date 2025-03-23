import {$AffixNode, $AnalyzerType, AffixNode, ExpressionNode, Node} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type InfixNode = AffixNode &
  Brand<'Analyzer.InfixNode'> & {
    left?: ExpressionNode | Nothing;
    right?: ExpressionNode | Nothing;
  };

export const $InfixNode = () => $AnalyzerType<InfixNode>('InfixNode', $AffixNode());

// function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
//   const keepSingleWhitespace = !node.operator.text.equals(RANGE);
//   analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
//   analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
// }
