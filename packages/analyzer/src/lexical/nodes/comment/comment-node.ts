import {$SyntaxNode2, analyzerPackageType, LexicalNode2, SyntaxNode2} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CommentNode = SyntaxNode2 &
  Brand<'Analyzer.CommentNode'> & {
    contentNode?: LexicalNode2 | Nothing;
  };

export const $CommentNode = analyzerPackageType<CommentNode>('CommentNode', $SyntaxNode2);
