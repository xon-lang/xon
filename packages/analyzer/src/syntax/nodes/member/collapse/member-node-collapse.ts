import {
  $IdNode,
  $SymbolOperatorNode,
  MemberNode,
  newMemberNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
  POINT,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseMemberNode(): NodeCollapseFn<MemberNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<MemberNode> => {
      return nodes.firstMap((operatorNode, index) => {
        if (!is(operatorNode, $SymbolOperatorNode()) || !operatorNode.text.equals(POINT)) {
          return nothing;
        }

        const instanceNode = nodes.at(index - 1);

        if (!instanceNode?.canBeExpression) {
          return nothing;
        }

        const rightNode = nodes.at(index + 1);
        const idNode = is(rightNode, $IdNode()) ? rightNode : nothing;

        return {
          node: newMemberNode(instanceNode, operatorNode, idNode),
          index: index - 1,
          deleteCount: idNode ? 3 : 2,
        };
      }, startIndex);
    },
  };
}
