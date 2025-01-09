import {$LexicalNode2, LexicalNode2, analyzerPackageType} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockCloseNode = LexicalNode2 & Brand<'Analyzer.CommentBlockCloseNode'>;

export const $CommentBlockCloseNode = analyzerPackageType<CommentBlockCloseNode>('CommentBlockCloseNode', $LexicalNode2);
