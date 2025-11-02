import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#core';

export type IntegerContentNode = LexicalNode & Brand<'Analyzer.IntegerContentNode'>;

export const $IntegerContentNode = () =>
  $AnalyzerType<IntegerContentNode>('IntegerContentNode', $LexicalNode());
