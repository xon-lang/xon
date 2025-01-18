import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type NlNode = LexicalNode2 & Brand<'Analyzer.NlNode'>;

export const $NlNode = analyzerPackageType<NlNode>('NlNode', $LexicalNode2);
