import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type StringOpenNode = LexicalNode & Brand<'Analyzer.StringOpenNode'>;

export const $StringOpenNode = () => $AnalyzerType<StringOpenNode>('StringOpenNode', $LexicalNode());
