import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type RadixPointNode = LexicalNode2 & Brand<'Analyzer.RadixPointNode'>;

export const $RadixPointNode = analyzerPackageType<RadixPointNode>('RadixPointNode', $LexicalNode2);
