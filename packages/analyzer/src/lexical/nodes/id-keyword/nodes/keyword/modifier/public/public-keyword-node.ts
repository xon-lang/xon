import {$ModifierKeywordNode, analyzerPackageType, ModifierKeywordNode} from '#analyzer';
import {Brand} from '#typing';

export type PublicKeywordNode = ModifierKeywordNode & Brand<'Analyzer.PublicKeywordNode'>;

export const $PublicKeywordNode = analyzerPackageType<PublicKeywordNode>(
  'PublicKeywordNode',
  $ModifierKeywordNode,
);
