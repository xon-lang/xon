import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeSemantics,
  createDeclarationScope,
  isInSet,
} from '#semantics';
import {$, isSetOperatorTypeSemantic} from '#typing';

export type InvokeTypeSemantic = TypeSemantics & {
  $: $.InvokeTypeSemantic;
  instance: TypeSemantics;
  // todo use a separate semantic than array
  args: TypeSemantics[];
};

export function invokeTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  instance: TypeSemantics,
  args: TypeSemantics[],
): InvokeTypeSemantic {
  return {
    $: $.InvokeTypeSemantic,
    nodeLink,
    instance,
    args,

    is(other: TypeSemantics): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return createDeclarationScope(analyzer);
      // throw new Error('Not implemented');
    },
  };
}
