import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface AssignNode extends SyntaxNode {
  $: $Node.ASSIGN;
  left: Node;
  operator: OperatorNode;
  right: Node | Nothing;
}

export function assignNode(
  context: SyntaxContext,
  left: Node,
  operator: OperatorNode,
  right: Node | Nothing,
): AssignNode {
  const node = syntaxNode($Node.ASSIGN, {left, operator, right});

  return node;
}
