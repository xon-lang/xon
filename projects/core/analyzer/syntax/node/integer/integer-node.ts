import {$} from '../../../../$';
import {Number2} from '../../../../../lib/types';
import {IntegerContentNode} from '../../../lexical/node/integer-content/integer-content-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {syntaxNode, SyntaxNode} from '../syntax-node';

export type IntegerNode = SyntaxNode<$.IntegerNode> &
  ExpressionNode & {
    content: IntegerContentNode;
    value: Number2;
  };

export function integerNode(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  const node: IntegerNode = {
    ...syntaxNode($.IntegerNode, {content}),
    value: Number(content.text.replaceAll('_', '')),
  };

  return node;
}
