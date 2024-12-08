import type { Nothing} from '#common';
import type {Node} from '#core';
import { Semantics } from '#semantics';


export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return  !is(node, $.OperatorNode);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: Semantics} {
  if (!node) {
    return false;
  }

  return 'semantic' in node && !!node.semantic;
}
