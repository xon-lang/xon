import {$} from '../../../../$';
import {Number2} from '../../../../../lib/types';
import {IntegerContentNode} from '../../../lexical/node/integer-content/integer-content-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {syntaxNode, SyntaxNode} from '../syntax-node';

// todo add also base node as 'LiteralNode' ???
export type IntegerNode = SyntaxNode<$.IntegerNode> &
  ExpressionNode & {
    content: IntegerContentNode;
    value: Number2;
  };

export function integerNode(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  const value = Number(content.text.toString().replaceAll('_', ''));

  return syntaxNode(analyzer, {$: $.IntegerNode, content, value});
}
