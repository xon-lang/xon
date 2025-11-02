import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type StringInterpolationOpenNode = LexicalNode & Brand<'Analyzer.StringInterpolationOpenNode'>;

export const $StringInterpolationOpenNode = () =>
  $AnalyzerType<StringInterpolationOpenNode>('StringInterpolationOpenNode', $LexicalNode());
