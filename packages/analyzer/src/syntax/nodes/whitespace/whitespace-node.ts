import {$LexicalNode2, analyzerPackageType, LexicalNode2} from '#analyzer';
import {Brand} from '#typing';

export type WhitespaceNode = LexicalNode2 & Brand<'Analyzer.WhitespaceNode'>;

export const $WhitespaceNode = analyzerPackageType<WhitespaceNode>('WhitespaceNode', $LexicalNode2);
