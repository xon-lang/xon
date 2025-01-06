import {$Semantic, analyzerPackageType, DeclarationNode, Semantic, TypeSemantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text, TextReference} from '#common';
import {Brand} from '#typing';

export type DeclarationSemantic = Semantic &
  Brand<'Analyzer.DeclarationSemantic'> & {
    nodeLink: DeclarationNode;
    documentation?: Text | Nothing;
    usages: ArrayData<TextReference>;
    modifier?: Text | Nothing;
    name: Text;
    type: TypeSemantic;

    equals(other: DeclarationSemantic): Boolean2;
  };

export const $DeclarationSemantic = analyzerPackageType<DeclarationSemantic>(
  'DeclarationSemantic',
  $Semantic,
);
