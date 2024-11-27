import type {Boolean2, Nothing} from '#common';
import type {ExpressionNode, Node, Semantic} from '#core';
import type {TypeMap} from '#typing';
import {$} from '#typing';

export function is<T extends $>(model: any, $: T): model is TypeMap[T] {
  if (model && typeof model === 'object' && '$' in model && typeof model['$'] === 'string') {
    return model.$.includes($);
  }

  return false;
}

export function isSetOperatorTypeSemantic(semantic: Semantic): Boolean2 {
  return semantic.$.includes($.SetTypeSemantic);
}

export function isNonOperatorExpression(node: Node): node is ExpressionNode {
  return is(node, $.ExpressionNode) && !is(node, $.OperatorNode);
}

export function hasSemantic<T extends Node>(node: T | Nothing): node is T & {semantic: Semantic} {
  if (!node) {
    return false;
  }

  return 'semantic' in node && !!node.semantic;
}
