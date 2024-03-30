import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface TypeNode extends SyntaxNode {
  $: $Node.TYPE;
  left: Node;
  operator: OperatorNode;
  right: Node | Nothing;
}

export function typeNode(context: SyntaxContext, left: Node, operator: OperatorNode, right: Node | Nothing): TypeNode {
  const node = syntaxNode($Node.TYPE, {left, operator, right});

  return node;
}
