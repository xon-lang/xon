import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, Node, findNode, is} from '../../node';
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

export function rangeSyntaxParse(operators: String[], isLeftRecursive = true): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer = 0) => {
    const found = findNode(
      context.nodes,
      startIndex,
      isLeftRecursive,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return;
    }

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
      return nothing;
    }

    const node = rangeNode(context, left, found.node, right);

    return {node, spliceIndex: found.index - 1};
  };
}
