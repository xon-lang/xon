import {$AnalyzerType, $SetTypeSemantic, Node, Semantic, SemanticScope, SetTypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type IntersectionTypeSemantic = SetTypeSemantic & {
  left: Semantic;
  right: Semantic;
};

export const $IntersectionTypeSemantic = () =>
  $AnalyzerType<IntersectionTypeSemantic>('IntersectionTypeSemantic', $SetTypeSemantic());

export function intersectionTypeSemantic(
  nodeLink: Node,
  left: Semantic,
  right: Semantic,
): IntersectionTypeSemantic {
  const semantic: IntersectionTypeSemantic = {
    $: $IntersectionTypeSemantic(),
    nodeLink,
    left,
    right,

    is(other: Semantic): Boolean2 {
      return this.equals(other);
    },

    equals(_other: Semantic): Boolean2 {
      return false;
    },

    scope(): SemanticScope {
      return this.left.scope().intersection(this.right.scope());
    },
  };

  return semantic;
}
