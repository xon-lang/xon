import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type StringInterpolationContentNode = LexicalNode & Brand<'Analyzer.StringInterpolationContentNode'>;

export const $StringInterpolationContentNode = () =>
  $AnalyzerType<StringInterpolationContentNode>('StringInterpolationContentNode', $LexicalNode());
