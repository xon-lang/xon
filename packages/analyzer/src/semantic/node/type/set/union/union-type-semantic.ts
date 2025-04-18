import {$AnalyzerType, $SetTypeSemantic, Node, SemanticScope, SetTypeSemantic, TypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type UnionTypeSemantic = SetTypeSemantic & {
  left: TypeSemantic;
  right: TypeSemantic;
};

export const $UnionTypeSemantic = () =>
  $AnalyzerType<UnionTypeSemantic>('UnionTypeSemantic', $SetTypeSemantic());

export function unionTypeSemantic(
  nodeLink: Node,
  left: TypeSemantic,
  right: TypeSemantic,
): UnionTypeSemantic {
  const semantic: UnionTypeSemantic = {
    $: $UnionTypeSemantic(),
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
      return this.left.scope().union(this.right.scope());
    },
  };

  return semantic;
}
