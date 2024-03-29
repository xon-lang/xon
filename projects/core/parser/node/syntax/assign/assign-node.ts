import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface AssignNode extends SyntaxNode {
  $: $Node.ASSIGN;
  operator: OperatorNode;
  value: Node | Nothing;
}

export function assignNode(context: SyntaxContext, operator: OperatorNode, value: Node | Nothing): AssignNode {
  const node = syntaxNode($Node.ASSIGN, {operator, value});

  // format(context, node);

  return node;
}

function format(context: SyntaxContext, node: AssignNode): Nothing {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  formatBetweenHiddenNodes(context, node.operator, keepSingleWhitespace);
}
