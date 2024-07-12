import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {StringCloseNode} from '../../../lexical/node/close/string-close/string-close-node';
import {StringOpenNode} from '../../../lexical/node/open/string-open/string-open-node';
import {StringContentNode} from '../../../lexical/node/string-content/string-content-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type StringNode = SyntaxNode<$.StringNode> &
  ExpressionNode & {
    open: StringOpenNode;
    content?: StringContentNode | Nothing;
    close?: StringCloseNode | Nothing;
  };

export function stringNode(
  analyzer: SyntaxAnalyzer,
  open: StringOpenNode,
  content: StringContentNode | Nothing,
  close?: StringCloseNode | Nothing,
): StringNode {
  return syntaxNode($.StringNode, {open, content, close});
}
