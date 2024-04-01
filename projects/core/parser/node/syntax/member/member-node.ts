import {formatAfterHiddenNodes, formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {ISSUE_MESSAGE} from '../../../../issue/issue-message';
import {Integer, Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node, Node, findNode, is} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, SyntaxParseFn, syntaxNode} from '../syntax-node';

export interface MemberNode extends SyntaxNode {
  $: $Node.MEMBER;
  instance: Node;
  operator: OperatorNode;
  id: IdNode | Nothing;
}

export function memberNode(
  context: SyntaxContext,
  operator: OperatorNode,
  instance: Node,
  id: IdNode | Nothing,
): MemberNode {
  const node = syntaxNode($Node.MEMBER, {instance, operator, id});
  validate(context, node);
  format(context, node);

  return node;
}

function validate(context: SyntaxContext, node: MemberNode): Nothing {
  if (!node.id) {
    context.issueManager.addError(node.operator.range, ISSUE_MESSAGE.shouldBeMemberName());
  }
}

function format(context: SyntaxContext, node: MemberNode): Nothing {
  formatBetweenHiddenNodes(context, node.instance, false);

  if (node.id) {
    formatAfterHiddenNodes(context, node.operator, false);
  }
}

export function memberSyntaxParse(operators: String[]): SyntaxParseFn {
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

    if (!left || is<OperatorNode>(left, $Node.OPERATOR)) {
      return nothing;
    }

    const id = is<IdNode>(right, $Node.ID) ? right : nothing;
    const node = memberNode(context, found.node, left, id);

    return {node, spliceIndex: found.index - 1};
  };
}
