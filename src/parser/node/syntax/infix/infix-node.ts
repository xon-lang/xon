import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {SyntaxContext} from '../../../syntax-context';
import {FormattingType, formatNode} from '../../../util/formatter';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  readonly $: $Node.INFIX;
  readonly operator: OperatorNode;
  readonly left: Node;
  readonly right: Node;
}

export function infixNode(context: SyntaxContext, operator: OperatorNode, left: Node, right: Node): InfixNode {
  const node: InfixNode = {
    $: $Node.INFIX,
    ...getRangeAndChildren(left, operator, right),
    operator,
    left,
    right,
  };

  validateInfixNode(context, node);
  checkFormatting(context, node);

  return node;
}

export function validateInfixNode(context: SyntaxContext, node: InfixNode): void {
  if (!node.left || !node.right) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}

function checkFormatting(context: SyntaxContext, node: InfixNode): void {
  node.hiddenNodes = node.right.hiddenNodes;

  const keepSingleWhitespace = !node.operator.text.includes('.');
  formatNode(context, node.left, keepSingleWhitespace, FormattingType.BETWEEN);
  formatNode(context, node.operator, keepSingleWhitespace, FormattingType.BETWEEN);
}
