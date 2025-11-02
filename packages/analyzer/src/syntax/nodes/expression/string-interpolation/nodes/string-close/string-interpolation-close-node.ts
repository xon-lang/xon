import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type StringInterpolationCloseNode = LexicalNode & Brand<'Analyzer.StringInterpolationCloseNode'>;

export const $StringInterpolationCloseNode = () =>
  $AnalyzerType<StringInterpolationCloseNode>('StringInterpolationCloseNode', $LexicalNode());
