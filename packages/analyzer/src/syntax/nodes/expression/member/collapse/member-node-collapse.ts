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
import {ArrayData, Integer, is, newText, nothing} from '#core';

export function collapseMemberNode(context: AnalyzerContext): NodeCollapseFn<MemberNode> {
  return {
    min: 2,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<MemberNode> => {
      return nodes.firstMap((operator, index) => {
        if (!is(operator, $SymbolOperatorNode()) || !operator.text.equals(POINT)) {
          return nothing;
        }

        const target = nodes.at(index - 1);

        if (!is(target, $ExpressionNode())) {
          return nothing;
        }

        const right = nodes.at(index + 1);
        const id = is(right, $IdNode()) ? right : nothing;

        if (!id) {
          context.addError(target.range, newText(`Identifier expect`));
        }

        return {
          node: newMemberNode(target, operator, id),
          index: index - 1,
          deleteCount: id ? 3 : 2,
        };
      }, startIndex);
    },
  };
}
