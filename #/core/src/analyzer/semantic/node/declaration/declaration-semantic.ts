import {Boolean2, Nothing, Text, TextReference} from '#common';
import {$Semantic, corePackageType, DeclarationNode, Semantic, TypeSemantic} from '#core';

export type DeclarationSemantic = Semantic & {
  nodeLink: DeclarationNode;
  documentation?: Text | Nothing;
  usages: TextReference[];
  modifier?: Text | Nothing;
  name: Text;
  type: TypeSemantic;

  eq(other: DeclarationSemantic): Boolean2;
};

export const $DeclarationSemantic = corePackageType<DeclarationSemantic>('DeclarationSemantic', $Semantic);
