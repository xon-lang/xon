import {$AnalyzerType, $LexicalNode, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type IntegerContentNode = LexicalNode & Brand<'Analyzer.IntegerContentNode'>;

export const $IntegerContentNode = () =>
  $AnalyzerType<IntegerContentNode>('IntegerContentNode', $LexicalNode());
