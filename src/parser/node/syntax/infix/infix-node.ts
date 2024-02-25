import { ISSUE_MESSAGE } from '../../../../issue/issue-message';
import { Nothing } from '../../../../lib/core';
import { SyntaxContext } from '../../../syntax-context';
import { $Node, Node } from '../../node';
import { OperatorNode } from '../../token/operator/operator-node';
import { WhitespaceNode } from '../../token/whitespace/whitespace-node';
import { SyntaxNode, getRangeAndChildren } from '../syntax-node';

export interface InfixNode extends SyntaxNode {
  readonly $: $Node.INFIX;
  readonly operator: OperatorNode;
  readonly left: Node | Nothing;
  readonly right: Node | Nothing;
}

export function infixNode(
  context: SyntaxContext,
  operator: OperatorNode,
  left: Node | Nothing,
  right: Node | Nothing,
): InfixNode {
  const node: InfixNode = {
    $: $Node.INFIX,
    ...getRangeAndChildren(left, operator, right),
    operator,
    left,
    right,
  };

  validateInfixNode(context, node);
  // checkFormatting(context, node);

  return node;
}

export function validateInfixNode(context: SyntaxContext, node: InfixNode): void {
  if (!node.left || !node.right) {
    context.issueManager.addError(node, ISSUE_MESSAGE.notImplemented());
  }
}

// export function checkFormatting(context: SyntaxContext, node: InfixNode): void {
//   if (node.left) {
//     // todo should we move it to parent functions ???
//     node.hiddenNodes = node.value.hiddenNodes;

//     if (node.operator.hiddenNodes.length <= 0) {
//       return;
//     }

//     // todo now we check only whitespace
//     const hiddenNode = node.operator.hiddenNodes[0] as WhitespaceNode;

//     if (node.operator.text.some((x) => x.isLetterOrDigit(0))) {
//       if (hiddenNode.text.length != 1) {
//         context.formatters.push({ range: hiddenNode.range, text: ' ' });
//       }
//     } else {
//       if (hiddenNode.text.length != 0) {
//         context.formatters.push({ range: hiddenNode.range, text: '' });
//       }
//     }
//   }
// }