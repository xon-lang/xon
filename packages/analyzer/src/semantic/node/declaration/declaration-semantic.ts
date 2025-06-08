import {$AnalyzerType, $IdTypeSemantic, $Semantic, IdTypeSemantic, Semantic, SemanticScope} from '#analyzer';
import {ArrayData, newArrayData, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<IdTypeSemantic>;
    reference: TextReference;
    documentation?: Text | Nothing;
    name: Text;
    scope?: SemanticScope | Nothing;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());

export function newDeclarationSemantic(
  reference: TextReference,
  documentation: Text | Nothing,
  name: Text,
  scope?: SemanticScope | Nothing,
): DeclarationSemantic {
  return {
    $: $DeclarationSemantic(),
    usages: newArrayData($IdTypeSemantic()),
    reference,
    documentation,
    name,
    scope,

    // getType(): TypeSemantic | Nothing {
    //   if (this.parameters?.some()) {
    //     return newFunctionTypeSemantic(this.parameters, this.type);
    //   }

    //   return this.type;
    // },
  };
}
