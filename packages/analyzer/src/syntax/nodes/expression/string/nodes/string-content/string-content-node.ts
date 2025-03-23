import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type StringContentNode = LexicalNode & Brand<'Analyzer.StringContentNode'>;

export const $StringContentNode = () => $AnalyzerType<StringContentNode>('StringContentNode', $LexicalNode());
