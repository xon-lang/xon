import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface RangeNode extends SyntaxNode {
  $: $Node.RANGE;
  from: Node;
  operator: OperatorNode;
  to: Node;
}

export function rangeNode(context: SyntaxContext, from: Node, operator: OperatorNode, to: Node): RangeNode {
  const node = syntaxNode($Node.RANGE, {from, operator, to});
  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: RangeNode): Nothing {
  formatBetweenHiddenNodes(context, node.from, false);
  formatBetweenHiddenNodes(context, node.operator, false);
}
