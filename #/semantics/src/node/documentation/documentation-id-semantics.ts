import {$Semantics, DeclarationSemantics, Semantics, semanticsPackageType} from '#semantics';

export type DocumentationIdSemantics = Semantics & {
  declaration: DeclarationSemantics;
};

export const $DocumentationIdSemantics = semanticsPackageType<DocumentationIdSemantics>(
  'DocumentationIdSemantics',
  $Semantics,
);

export function newDocumentationIdSemantics(declaration: DeclarationSemantics): DocumentationIdSemantics {
  return {
    $: $DocumentationIdSemantics,
    declaration,

    equals(other) {
      return false;
    },
  };
}
