import {$AnalyzerType, $SetTypeSemantic, Node, SemanticScope, SetTypeSemantic, TypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type ComplementTypeSemantic = SetTypeSemantic & {
  left: TypeSemantic;
  right: TypeSemantic;
};

export const $ComplementTypeSemantic = () =>
  $AnalyzerType<ComplementTypeSemantic>('ComplementTypeSemantic', $SetTypeSemantic());

export function complementTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $ComplementTypeSemantic(),
    nodeLink,
    left,
    right,

    is(other: TypeSemantic): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantic): Boolean2 {
      return false;
    },

    scope(): SemanticScope {
      return this.left.scope().complement(this.right.scope());
    },
  };

  return semantic;
}
