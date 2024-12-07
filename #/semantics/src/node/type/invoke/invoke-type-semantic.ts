import {Boolean2} from '#common';
import {
  AttributeValueDeclarationSemantic,
  DeclarationScope,
  Node,
  SemanticAnalyzer,
  TypeSemantic,
  createDeclarationScope,
  isInSet,
} from '#semantics';
import {$, isSetOperatorTypeSemantic} from '#typing';

export type InvokeTypeSemantic = TypeSemantic & {
  $: $.InvokeTypeSemantic;
  instance: TypeSemantic;
  // todo use a separate semantic than array
  args: TypeSemantic[];
};

export function invokeTypeSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  instance: TypeSemantic,
  args: TypeSemantic[],
): InvokeTypeSemantic {
  return {
    $: $.InvokeTypeSemantic,
    nodeLink,
    instance,
    args,

    is(other: TypeSemantic): Boolean2 {
      if (isSetOperatorTypeSemantic(other)) {
        return isInSet(this, other);
      }

      if (this.eq(other)) {
        return true;
      }

      return false;
    },

    eq(other: TypeSemantic): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantic> {
      return createDeclarationScope(analyzer);
      // throw new Error('Not implemented');
    },
  };
}
