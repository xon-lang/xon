import {Nothing, String2} from '#common';
import {Node, TypeSemantics, ValueDeclarationSemantics, ValueSemantic} from '#semantics';
import {$} from '#typing';

export type IdValueSemantic = ValueSemantic<$.IdValueSemantic> & {
  name: String2;
  declaration?: ValueDeclarationSemantics | Nothing;
};

export function idValueSemantic(
  nodeLink: Node,
  name: String2,
  declaration: ValueDeclarationSemantics | Nothing,
  type: TypeSemantics,
): IdValueSemantic {
  if (declaration) {
    declaration.usages.push(nodeLink.reference);
  }

  return {
    $: $.IdValueSemantic,
    nodeLink,
    name,
    type,
    declaration,
  };
}
