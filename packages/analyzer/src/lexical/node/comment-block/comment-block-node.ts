import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentBlockNode = LexicalNode & Brand<'Analyzer.CommentBlockNode'>;

export const $CommentBlockNode = analyzerPackageType<CommentBlockNode>('CommentBlockNode', $LexicalNode);
