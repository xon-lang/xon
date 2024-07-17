import {$, is} from '../../../../$';
import {Nothing, String2} from '../../../../../lib/types';
import {TypeSemantic} from '../../../../analyzer/semantic/node/type/type-semantic';
import {TypescriptTranslatorNode} from '../typescript-node';

export type TypeTypescriptNode = TypescriptTranslatorNode & {
  $: $.TypeTypescriptNode;
};

export function toTypeTypescriptNode(semantic: TypeSemantic | Nothing): TypeTypescriptNode {
  return {
    $: $.TypeTypescriptNode,

    translate(): String2 {
      if (!semantic) {
        return `// error ???`;
      }

      if (is(semantic, $.StringTypeSemantic)) {
        return `"${semantic.value}"`;
      }

      if (is(semantic, $.IntegerTypeSemantic)) {
        return `${semantic.value}`;
      }

      if (is(semantic, $.UnionTypeSemantic)) {
        const left = toTypeTypescriptNode(semantic.left);
        const right = toTypeTypescriptNode(semantic.right);

        return `${left.translate()} | ${right.translate()}`;
      }

      if (is(semantic, $.IntersectionTypeSemantic)) {
        const left = toTypeTypescriptNode(semantic.left);
        const right = toTypeTypescriptNode(semantic.right);

        return `${left.translate()} & ${right.translate()}`;
      }

      if (is(semantic, $.ArrayTypeSemantic)) {
        const items = semantic.items.map((x) => toTypeTypescriptNode(x).translate()).join(', ');

        return `[${items}]`;
      }

      return `// error ???`;
    },
  };
}
