import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, SyntaxParseFn, syntaxNode} from '../syntax-node';

export interface PostfixNode extends SyntaxNode {
  $: $Node.POSTFIX;
  value: Node;
  operator: OperatorNode;
}

export function postfixNode(context: SyntaxContext, value: Node, operator: OperatorNode): PostfixNode {
  const node = syntaxNode($Node.POSTFIX, {value, operator});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PostfixNode): Nothing {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  formatBetweenHiddenNodes(context, node.value, keepSingleWhitespace);
}

export function postfixSyntaxParse(operators: String[]): SyntaxParseFn {
  return (context: SyntaxContext, startIndex: Integer = 0) => {
    const found = findNode(
      context.nodes,
      startIndex,
      true,
      (x): x is OperatorNode => is<OperatorNode>(x, $Node.OPERATOR) && operators.includes(x.text),
    );

    if (!found) {
      return;
    }

    const lastIndex = context.nodes.length - 1;
    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (
      !left ||
      is<OperatorNode>(left, $Node.OPERATOR) ||
      !(found.index === lastIndex || is<OperatorNode>(right, $Node.OPERATOR))
    ) {
      return nothing;
    }

    const node = postfixNode(context, left, found.node);

    return {node, spliceIndex: found.index - 1};
  };
}
