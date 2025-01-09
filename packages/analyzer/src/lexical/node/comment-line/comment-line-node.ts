import {$LexicalNode, analyzerPackageType, LexicalNode} from '#analyzer';
import {Brand} from '#typing';

export type CommentLineNode = LexicalNode & Brand<'Analyzer.CommentLineNode'>;

export const $CommentLineNode = analyzerPackageType<CommentLineNode>('CommentLineNode', $LexicalNode);
