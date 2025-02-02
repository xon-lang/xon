import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type IdNode = LexicalNode2 & Brand<'Analyzer.IdNode'>;

export const $IdNode = analyzerPackageType<IdNode>('IdNode', $LexicalNode2);
