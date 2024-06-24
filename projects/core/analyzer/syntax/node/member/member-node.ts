import {Nothing} from '../../../../../lib/types';
import {DIAGNOSTIC_MESSAGE} from '../../../../diagnostic/analyzer-diagnostic-message';
import {formatChildNode} from '../../../../formatter/formatter';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, ExpressionNode, Node} from '../../node';
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
    context.diagnosticManager.addError(node.operator.range, DIAGNOSTIC_MESSAGE.shouldBeMemberName());
  }
}

function format(context: SyntaxContext, node: MemberNode): void {
  formatChildNode(context, node.operator, false);

  if (node.id) {
    formatChildNode(context, node.id, false);
  }
}
