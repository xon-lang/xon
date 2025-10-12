import {$AnalyzerType, $SetTypeSemantic, Node, Semantic, SemanticScope, SetTypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type NotTypeSemantic = SetTypeSemantic & {
  value: Semantic;
};

export const $NotTypeSemantic = () => $AnalyzerType<NotTypeSemantic>('NotTypeSemantic', $SetTypeSemantic());

export function notTypeSemantic(nodeLink: Node, value: Semantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $NotTypeSemantic(),
    nodeLink,
    value,

    is(other: Semantic): Boolean2 {
      return this.equals(other);
    },

    equals(_other: Semantic): Boolean2 {
      return false;
    },

    scope(): SemanticScope {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
