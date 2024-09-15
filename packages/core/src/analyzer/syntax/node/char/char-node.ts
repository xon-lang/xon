import {$} from '../../../../$';
import {Char, Nothing} from '../../../../../../lib/src/types';
import {CharContentNode} from '../../../lexical/node/char-content/char-content-node';
import {CharCloseNode} from '../../../lexical/node/close/char-close/char-close-node';
import {CharOpenNode} from '../../../lexical/node/open/char-open/char-open-node';
import {ExpressionNode} from '../../../node';
import {CharTypeSemantic} from '../../../semantic/node/type/char/char-type-semantic';
import {CharValueSemantic} from '../../../semantic/node/value/char/char-value-semantic';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {syntaxNode, SyntaxNode} from '../syntax-node';

export type CharNode = SyntaxNode<$.CharNode> &
  ExpressionNode & {
    semantic?: CharTypeSemantic | CharValueSemantic | Nothing;
    value: Char;

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
  const value = content?.text.toString() ?? '';

  return syntaxNode(analyzer, {$: $.CharNode, open, content, close, value});
}
