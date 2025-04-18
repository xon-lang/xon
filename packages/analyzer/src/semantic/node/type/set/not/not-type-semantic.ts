import {$AnalyzerType, $SetTypeSemantic, Node, SemanticScope, SetTypeSemantic, TypeSemantic} from '#analyzer';
import {Boolean2} from '#common';

export type NotTypeSemantic = SetTypeSemantic & {
  value: TypeSemantic;
};

export const $NotTypeSemantic = () => $AnalyzerType<NotTypeSemantic>('NotTypeSemantic', $SetTypeSemantic());

export function notTypeSemantic(nodeLink: Node, value: TypeSemantic): NotTypeSemantic {
  const semantic: NotTypeSemantic = {
    $: $NotTypeSemantic(),
    nodeLink,
    value,

    is(other: TypeSemantic): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantic): Boolean2 {
      return false;
    },

    scope(): SemanticScope {
      // todo investigate
      throw new Error('Not implemented');
    },
  };

  return semantic;
}
