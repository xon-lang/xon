import {$AnalyzerType, $Semantic, DeclarationScope, IdTypeSemantic, Semantic} from '#analyzer';
import {ArrayData, newArrayData, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    usages: ArrayData<IdTypeSemantic>;
    reference: TextReference;
    documentation?: Text | Nothing;
    name: Text;
    attributes?: DeclarationScope | Nothing;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());

export function newDeclarationSemantic(
  reference: TextReference,
  documentation: Text | Nothing,
  name: Text,
  attributes?: DeclarationScope | Nothing,
): DeclarationSemantic {
  return {
    $: $DeclarationSemantic(),
    usages: newArrayData(),
    reference,
    documentation,
    name,
    attributes,

    // getType(): TypeSemantic | Nothing {
    //   if (this.parameters?.some()) {
    //     return newFunctionTypeSemantic(this.parameters, this.type);
    //   }

    //   return this.type;
    // },
  };
}
