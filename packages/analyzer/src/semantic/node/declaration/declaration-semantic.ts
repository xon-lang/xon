import {$Semantic, analyzerPackageType, DeclarationNode, Semantic, TypeSemantic} from '#analyzer';
import {ArrayData, Boolean2, Nothing, Text, TextReference} from '#common';

export type DeclarationSemantic = Semantic & {
  nodeLink: DeclarationNode;
  documentation?: Text | Nothing;
  usages: ArrayData<TextReference>;
  modifier?: Text | Nothing;
  name: Text;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};

export const $DeclarationSemantic = analyzerPackageType<DeclarationSemantic>(
  'DeclarationSemantic',
  $Semantic,
);
