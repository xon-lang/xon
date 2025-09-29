import {$IsOperatorNode, collapseInfixNode, IsInfixNode, newIsInfixNode, NodeCollapseFn} from '#analyzer';

export function collapseIsInfixNode(): NodeCollapseFn<IsInfixNode> {
  return collapseInfixNode($IsOperatorNode(), newIsInfixNode);
}
