import {$AnalyzerType, $Semantic, DeclarationSemantic, Semantic, SemanticContext} from '#analyzer';
import {ArrayData, Nothing} from '#common';

export type ArraySemantic = Semantic & {
  declaration?: DeclarationSemantic | Nothing;
  items: ArrayData<Semantic>;
};

export const $ArraySemantic = () => $AnalyzerType<ArraySemantic>('ArraySemantic', $Semantic());

export function newArraySemantic(context: SemanticContext, items: ArrayData<Semantic>): ArraySemantic {
  return {
    $: $ArraySemantic(),
    declaration: context.literal.arrayDeclaration,
    items,
  };
}
