import {$AnalyzerType, $ExpressionNode, ExpressionNode, OperatorNode} from '#analyzer';
import {Brand} from '#typing';

export type AffixNode = ExpressionNode &
  Brand<'Analyzer.AffixNode'> & {
    operator: OperatorNode;
  };

export const $AffixNode = () => $AnalyzerType<AffixNode>('AffixNode', $ExpressionNode());
