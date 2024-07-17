import {$} from '../../../../$';
import {nothing, Nothing, String2} from '../../../../../lib/types';
import {ExpressionNode} from '../../../../analyzer/node';
import {TypescriptTranslatorNode} from '../typescript-node';

export type TypeTypescriptNode = TypescriptTranslatorNode & {
  $: $.TypeTypescriptNode;
};

export function toTypeTypescriptNode(node: ExpressionNode | Nothing): TypeTypescriptNode | Nothing {
  if (!node) {
    return nothing;
  }

  return {
    $: $.TypeTypescriptNode,

    translate(): String2 {
      return ``;
    },
  };
}
