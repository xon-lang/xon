import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type IntegerContentNode = LexicalNode2 & Brand<'Analyzer.IntegerContentNode'>;

export const $IntegerContentNode = analyzerPackageType<IntegerContentNode>(
  'IntegerContentNode',
  $LexicalNode2,
);
