import {$AnalyzerType, $SyntaxNode, OperatorNode, SyntaxNode} from '#analyzer';
import {Brand} from '#typing';

export type AffixNode = SyntaxNode &
  Brand<'Analyzer.AffixNode'> & {
    operator: OperatorNode;
  };

export const $AffixNode = () => $AnalyzerType<AffixNode>('AffixNode', $SyntaxNode());
