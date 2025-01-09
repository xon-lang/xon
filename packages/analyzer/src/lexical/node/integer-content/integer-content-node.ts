import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type IntegerContentNode = LexicalNode & Brand<'Analyzer.IntegerContentNode'>;

export const $IntegerContentNode = analyzerPackageType<IntegerContentNode>(
  'IntegerContentNode',
  $LexicalNode,
);
