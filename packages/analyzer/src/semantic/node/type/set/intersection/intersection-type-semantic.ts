import {$AnalyzerType, $SetTypeSemantic, Node, SemanticScope, SetTypeSemantic, TypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type IntersectionTypeSemantic = SetTypeSemantic & {
  left: TypeSemantic;
  right: TypeSemantic;
};

export const $IntersectionTypeSemantic = () =>
  $AnalyzerType<IntersectionTypeSemantic>('IntersectionTypeSemantic', $SetTypeSemantic());

export function intersectionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $IntersectionTypeSemantic(),
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
      return this.left.scope().intersection(this.right.scope());
    },
  };

  return semantic;
}
