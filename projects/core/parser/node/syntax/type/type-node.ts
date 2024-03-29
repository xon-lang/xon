import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface TypeNode extends SyntaxNode {
  $: $Node.TYPE;
  operator: OperatorNode;
  value: Node | Nothing;
}

export function typeNode(context: SyntaxContext, operator: OperatorNode, value: Node | Nothing): TypeNode {
  const node = syntaxNode($Node.TYPE, {operator, value});

  // format(context, node);

  return node;
}

function format(context: SyntaxContext, node: TypeNode): Nothing {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  formatBetweenHiddenNodes(context, node.operator, keepSingleWhitespace);
}
