import {
  $ExpressionNode,
  $IdNode,
  $SymbolOperatorNode,
  AnalyzerContext,
  MemberNode,
  newMemberNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  POINT,
} from '#analyzer';
import {ArrayData, Integer, newText, nothing} from '#common';
import {is} from '#typing';

export function collapseMemberNode(context: AnalyzerContext): NodeCollapseFn<MemberNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<MemberNode> => {
      return nodes.firstMap((operatorNode, index) => {
        if (!is(operatorNode, $SymbolOperatorNode()) || !operatorNode.text.equals(POINT)) {
          return nothing;
        }

        const instanceNode = nodes.at(index - 1);

        if (!is(instanceNode, $ExpressionNode())) {
          return nothing;
        }

        const rightNode = nodes.at(index + 1);
        const idNode = is(rightNode, $IdNode()) ? rightNode : nothing;

        if (!idNode) {
          context.addError(instanceNode.range, newText(`Identifier expect`));
        }

        return {
          node: newMemberNode(instanceNode, operatorNode, idNode),
          index: index - 1,
          deleteCount: idNode ? 3 : 2,
        };
      }, startIndex);
    },
  };
}
