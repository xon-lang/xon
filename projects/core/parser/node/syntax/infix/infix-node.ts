import {formatAfterHiddenNodes, formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  $: $Node.INFIX;
  left: Node;
  operator: OperatorNode;
  right: Node;
}

export function infixNode(context: SyntaxContext, left: Node, operator: OperatorNode, right: Node): InfixNode {
  const node = syntaxNode($Node.INFIX, {left, operator, right});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: InfixNode): Nothing {
  const NO_LEFT_SPACE_TOKENS = ['.', ':'];
  const leftSingleWhitespace = !NO_LEFT_SPACE_TOKENS.includes(node.operator.text[0]);
  formatBetweenHiddenNodes(context, node.left, leftSingleWhitespace);

  const NO_OPERATOR_SPACE_TOKENS = ['.'];
  const operatorSingleWhitespace = !NO_OPERATOR_SPACE_TOKENS.includes(node.operator.text[0]);
  formatAfterHiddenNodes(context, node.operator, operatorSingleWhitespace);
}
