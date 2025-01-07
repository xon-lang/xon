import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CloseNode = LexicalNode & Brand<'Analyzer.CloseNode'>;

export const $CloseNode = analyzerPackageType<CloseNode>('CloseNode', $LexicalNode);
