import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {ASSIGN, TYPE} from '../../../parser-config';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type PrefixNode = SyntaxNode<$Node.PREFIX> &
  ExpressionNode & {
    operator: OperatorNode;
    value: ExpressionNode;
  };

export function prefixNode(context: SyntaxContext, operator: OperatorNode, value: ExpressionNode): PrefixNode {
  const node = syntaxNode($Node.PREFIX, {operator, value});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PrefixNode): Nothing {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter(0) || x === TYPE || x === ASSIGN);
  formatChildNode(context, node.value, keepSingleWhitespace);
}
