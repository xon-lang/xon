import {
  $PlusOperatorNode,
  collapseInfixNode,
  newPlusInfixNode,
  NodeCollapseFn,
  PlusInfixNode,
} from '#analyzer';

export function collapsePlusInfixNode(): NodeCollapseFn<PlusInfixNode> {
  return collapseInfixNode($PlusOperatorNode(), newPlusInfixNode);
}
