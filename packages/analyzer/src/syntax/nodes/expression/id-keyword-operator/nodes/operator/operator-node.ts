import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type OperatorNode = LexicalNode & Brand<'Analyzer.OperatorNode'>;

export const $OperatorNode = () => $AnalyzerType<OperatorNode>('OperatorNode', $LexicalNode());
