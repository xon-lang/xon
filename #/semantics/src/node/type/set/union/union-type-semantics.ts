import {
  $SetTypeSemantics,
  AttributeValueDeclarationSemantics,
  DeclarationScope,
  semanticsPackageType,
  SetTypeSemantics,
  TypeSemantics,
} from '#semantics';
import {Boolean2} from '#typing';

export type UnionTypeSemantics = SetTypeSemantics & {
  left: TypeSemantics;
  right: TypeSemantics;
};

export const $UnionTypeSemantics = semanticsPackageType<UnionTypeSemantics>(
  'UnionTypeSemantics',
  $SetTypeSemantics,
);

export function newUnionTypeSemantics(left: TypeSemantics, right: TypeSemantics): UnionTypeSemantics {
  const semantic: UnionTypeSemantics = {
    $: $UnionTypeSemantics,
    left,
    right,

    is(other: TypeSemantics): Boolean2 {
      return this.equals(other);
    },

    equals(_other: TypeSemantics): Boolean2 {
      return false;
    },

    attributes(): DeclarationScope<AttributeValueDeclarationSemantics> {
      return this.left.attributes().union(this.right.attributes());
    },
  };

  return semantic;
}
