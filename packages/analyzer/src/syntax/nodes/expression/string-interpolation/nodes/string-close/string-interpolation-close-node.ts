import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type StringInterpolationCloseNode = LexicalNode & Brand<'Analyzer.StringInterpolationCloseNode'>;

export const $StringInterpolationCloseNode = () =>
  $AnalyzerType<StringInterpolationCloseNode>('StringInterpolationCloseNode', $LexicalNode());
