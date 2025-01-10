import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type UnknownNode = LexicalNode2 & Brand<'Analyzer.UnknownNode'>;

export const $UnknownNode = analyzerPackageType<UnknownNode>('UnknownNode', $LexicalNode2);
