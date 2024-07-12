import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {CharContentNode} from '../../../lexical/node/char-content/char-content-node';
import {CharCloseNode} from '../../../lexical/node/close/char-close/char-close-node';
import {CharOpenNode} from '../../../lexical/node/open/char-open/char-open-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {syntaxNode, SyntaxNode} from '../syntax-node';

export type CharNode = SyntaxNode<$.CharNode> &
  ExpressionNode & {
    open: CharOpenNode;
    content?: CharContentNode | Nothing;
    close?: CharCloseNode | Nothing;
  };

export function charNode(
  analyzer: SyntaxAnalyzer,
  open: CharOpenNode,
  content: CharContentNode | Nothing,
  close?: CharCloseNode | Nothing,
): CharNode {
  return syntaxNode($.CharNode, {open, content, close});
}
