import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type StringInterpolationOpenNode = LexicalNode & Brand<'Analyzer.StringInterpolationOpenNode'>;

export const $StringInterpolationOpenNode = () =>
  $AnalyzerType<StringInterpolationOpenNode>('StringInterpolationOpenNode', $LexicalNode());
