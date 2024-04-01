import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, SyntaxParseFn, syntaxNode} from '../syntax-node';

export interface PrefixNode extends SyntaxNode {
  $: $Node.PREFIX;
  operator: OperatorNode;
  value: Node;
}

export function prefixNode(context: SyntaxContext, operator: OperatorNode, value: Node): PrefixNode {
  const node = syntaxNode($Node.PREFIX, {operator, value});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PrefixNode): Nothing {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  formatBetweenHiddenNodes(context, node.operator, keepSingleWhitespace);
}

export function prefixSyntaxParse(operators: String[], isLeftRecursive = true): SyntaxParseFn {
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

    if (
      !right ||
      is<OperatorNode>(right, $Node.OPERATOR) ||
      !(found.index === 0 || is<OperatorNode>(left, $Node.OPERATOR))
    ) {
      return nothing;
    }

    const node = prefixNode(context, found.node, right);

    return {node, spliceIndex: found.index};
  };
}
