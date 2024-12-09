import {
  $ValueSemantics,
  semanticsPackageType,
  TypeSemantics,
  ValueDeclarationSemantics,
  ValueSemantics,
} from '#semantics';
import {Nothing, String2} from '#typing';

export type IdValueSemantics = ValueSemantics & {
  name: String2;
  declaration?: ValueDeclarationSemantics | Nothing;
};

export const $IdValueSemantics = semanticsPackageType<IdValueSemantics>('IdValueSemantics', $ValueSemantics);

export function newIdValueSemantics(
  name: String2,
  declaration: ValueDeclarationSemantics | Nothing,
  type: TypeSemantics,
): IdValueSemantics {
  // if (declaration) {
  //   declaration.usages.push(nodeLink.reference);
  // }

  return {
    $: $IdValueSemantics,
    name,
    type,
    declaration,

    equals(other) {
      return false;
    },
  };
}
