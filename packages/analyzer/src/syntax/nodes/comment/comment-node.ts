import {analyzerPackageType, LexicalNode, SyntaxNode} from '#analyzer';
import {Nothing} from '#common';
import {Brand} from '#typing';

export type CommentNode = SyntaxNode &
  Brand<'Analyzer.CommentNode'> & {
    contentNode?: LexicalNode | Nothing;
  };

export const $CommentNode = analyzerPackageType<CommentNode>('CommentNode', SyntaxNode);
