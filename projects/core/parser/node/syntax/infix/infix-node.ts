import {formatAfterHiddenNodes, formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {SyntaxParseFn} from '../../../util/statement-collapse';
import {$Node, Node, findNode, is} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  $: $Node.INFIX;
  left: Node;
  operator: OperatorNode;
  right: Node | Nothing;
}

export function infixNode(
  context: SyntaxContext,
  left: Node,
  operator: OperatorNode,
  right: Node | Nothing,
): InfixNode {
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

export function infixSyntaxParse(operators: String[]): SyntaxParseFn {
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

    const left = context.nodes[found.index - 1];
    const right = context.nodes[found.index + 1];

    if (!left || !right || is<OperatorNode>(left, $Node.OPERATOR) || is<OperatorNode>(right, $Node.OPERATOR)) {
      return nothing;
    }

    const node = infixNode(context, left, found.node, right);

    return {node, spliceIndex: found.index - 1};
  };
}
