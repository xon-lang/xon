import {$AnalyzerType, $SetTypeSemantic, Node, Semantic, SemanticScope, SetTypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type UnionTypeSemantic = SetTypeSemantic & {
  left: Semantic;
  right: Semantic;
};

export const $UnionTypeSemantic = () =>
  $AnalyzerType<UnionTypeSemantic>('UnionTypeSemantic', $SetTypeSemantic());

export function unionTypeSemantic(nodeLink: Node, left: Semantic, right: Semantic): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $UnionTypeSemantic(),
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
      return this.left.scope().union(this.right.scope());
    },
  };

  return semantic;
}
