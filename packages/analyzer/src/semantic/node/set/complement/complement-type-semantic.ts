import {$AnalyzerType, $SetTypeSemantic, Node, Semantic, SemanticScope, SetTypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type ComplementTypeSemantic = SetTypeSemantic & {
  left: Semantic;
  right: Semantic;
};

export const $ComplementTypeSemantic = () =>
  $AnalyzerType<ComplementTypeSemantic>('ComplementTypeSemantic', $SetTypeSemantic());

export function complementTypeSemantic(
  nodeLink: Node,
  left: Semantic,
  right: Semantic,
): ComplementTypeSemantic {
  const semantic: ComplementTypeSemantic = {
    $: $ComplementTypeSemantic(),
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
      return this.left.scope().complement(this.right.scope());
    },
  };

  return semantic;
}
