import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface PrefixNode extends SyntaxNode {
  readonly $: $Node.PREFIX;
  readonly operator: OperatorNode;
  readonly value: Node;
}

export function prefixNode(context: SyntaxContext, operator: OperatorNode, value: Node): PrefixNode {
  const node: PrefixNode = {
    $: $Node.PREFIX,
    ...getRangeAndChildren(operator, value),
    operator,
    value,
  };

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: PrefixNode): void {
  node.hiddenNodes = node.value.hiddenNodes;

  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetterOrDigit(0));
  formatBetweenHiddenNodes(context, node.operator, keepSingleWhitespace);
}
