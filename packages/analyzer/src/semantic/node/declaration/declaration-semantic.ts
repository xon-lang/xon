import {$AnalyzerType, $Semantic, $UsageSemantic, Semantic, SemanticScope, UsageSemantic} from '#analyzer';
import {ArrayData, Boolean2, Brand, newArrayData, Nothing, Text, TextReference} from '#core';

export enum DeclarationType {
  Base,
  Parameter,
  Attribute,
}

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    type: DeclarationType;
    usages: ArrayData<UsageSemantic>;
    reference: TextReference;
    documentation?: Text | Nothing;
    name: Text;
    parameters?: ArrayData<DeclarationSemantic> | Nothing;
    // todo rename to attributes or members ???
    scope?: SemanticScope | Nothing;
  };

export const $DeclarationSemantic = () =>
  $AnalyzerType<DeclarationSemantic>('DeclarationSemantic', $Semantic());

export function newDeclarationSemantic(
  isType: Boolean2,
  type: DeclarationType,
  reference: TextReference,
  documentation: Text | Nothing,
  name: Text,
  parameters?: ArrayData<DeclarationSemantic> | Nothing,
  scope?: SemanticScope | Nothing,
): DeclarationSemantic {
  return {
    $: $DeclarationSemantic(),
    isType,
    type,
    usages: newArrayData($UsageSemantic()),
    reference,
    documentation,
    name,
    parameters,
    scope,

    // getType(): TypeSemantic | Nothing {
    //   if (this.parameters?.some()) {
    //     return newFunctionTypeSemantic(this.parameters, this.type);
    //   }

    //   return this.type;
    // },
  };
}
