import {Nothing} from '../../../../../lib/types';
import {formatChildNode} from '../../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, Node} from '../../node';
import {IdNode} from '../../../lexical/token/id/id-node';
import {OperatorNode} from '../../../lexical/token/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type MemberNode = SyntaxNode<$Node.MEMBER> &
  ExpressionNode & {
    instance: ExpressionNode;
    operator: OperatorNode;
    id: IdNode | Nothing;
  };

export function memberNode(
  context: SyntaxContext,
  instance: Node,
  operator: OperatorNode,
  id: IdNode | Nothing,
): MemberNode {
  const node = syntaxNode($Node.MEMBER, {instance, operator, id});

  validate(context, node);
  format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: MemberNode): void {
  if (!node.id) {
    context.issueManager.addError(node.operator.range, ISSUE_MESSAGE.shouldBeMemberName());
  }
}

function format(context: SyntaxContext, node: MemberNode): void {
  formatChildNode(context, node.operator, false);

  if (node.id) {
    formatChildNode(context, node.id, false);
  }
}
