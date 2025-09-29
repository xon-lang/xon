import {
  $UnionOperatorNode,
  collapseInfixNode,
  newUnionInfixNode,
  NodeCollapseFn,
  UnionInfixNode,
} from '#analyzer';

export function collapseUnionInfixNode(): NodeCollapseFn<UnionInfixNode> {
  return collapseInfixNode($UnionOperatorNode(), newUnionInfixNode);
}
