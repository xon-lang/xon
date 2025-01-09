import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type StringContentNode = LexicalNode2 & Brand<'Analyzer.StringContentNode'>;

export const $StringContentNode = analyzerPackageType<StringContentNode>('StringContentNode', $LexicalNode2);
