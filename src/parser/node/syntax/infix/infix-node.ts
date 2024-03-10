import {formatAfterHiddenNodes, formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node} from '../../node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  readonly $: $Node.INFIX;
  readonly operator: OperatorNode;
  readonly left: Node;
  readonly right: Node;
}

export function infixNode(context: SyntaxContext, operator: OperatorNode, left: Node, right: Node): InfixNode {
  const node = syntaxNode($Node.INFIX, {left, operator, right});

  validate(context, node);
  format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: InfixNode): void {
  if (!node.left || !node.right) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}

function format(context: SyntaxContext, node: InfixNode): void {
  const NO_LEFT_SPACE_TOKENS = ['.', ':'];
  const leftSingleWhitespace = !NO_LEFT_SPACE_TOKENS.includes(node.operator.text[0]);
  formatBetweenHiddenNodes(context, node.left, leftSingleWhitespace);

  const NO_OPERATOR_SPACE_TOKENS = ['.'];
  const operatorSingleWhitespace = !NO_OPERATOR_SPACE_TOKENS.includes(node.operator.text[0]);
  formatAfterHiddenNodes(context, node.operator, operatorSingleWhitespace);
}
