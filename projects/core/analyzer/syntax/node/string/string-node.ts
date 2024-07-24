import {$} from '../../../../$';
import {Nothing, String2} from '../../../../../lib/types';
import {StringCloseNode} from '../../../lexical/node/close/string-close/string-close-node';
import {StringOpenNode} from '../../../lexical/node/open/string-open/string-open-node';
import {StringContentNode} from '../../../lexical/node/string-content/string-content-node';
import {ExpressionNode} from '../../../node';
import {StringTypeSemantic} from '../../../semantic/node/type/string/string-type-semantic';
import {StringValueSemantic} from '../../../semantic/node/value/string/string-value-semantic';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type StringNode = SyntaxNode<$.StringNode> &
  ExpressionNode & {
    semantic?: StringTypeSemantic | StringValueSemantic | Nothing;
    value: String2;

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
  const value = content?.text ?? '';

  return syntaxNode({$: $.StringNode, open, content, close, value});
}
