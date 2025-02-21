import {
  $AssignNode,
  $ParenGroupNode,
  $TypeNode,
  extractDeclarationInfo,
  LambdaNode,
  newLambdaNode,
  Node,
  NodeCollapseFn,
  NodeCollapseResult,
} from '#analyzer';
import {ArrayData, Integer, nothing} from '#common';
import {is} from '#typing';

export function collapseLambdaNode(): NodeCollapseFn<LambdaNode> {
  return {
    min: 1,
    collapse: (nodes: ArrayData<Node>, startIndex: Integer): NodeCollapseResult<LambdaNode> => {
      return nodes.lastMap((typeAssign, index) => {
        if (!is(typeAssign, $TypeNode()) && !is(typeAssign, $AssignNode())) {
          return nothing;
        }

        const {target, type, assign} = extractDeclarationInfo(typeAssign);

        if (!is(target, $ParenGroupNode())) {
          return nothing;
        }

        return {
          index: index,
          deleteCount: 1,
          node: newLambdaNode(target, type, assign),
        };
      }, startIndex);
    },
  };
}
