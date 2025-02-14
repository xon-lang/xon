import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type WhitespaceNode = LexicalNode & Brand<'Analyzer.WhitespaceNode'>;

export const $WhitespaceNode = analyzerPackageType<WhitespaceNode>('WhitespaceNode', $LexicalNode);
