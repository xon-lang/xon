import {ArrayData, Dictionary, Integer, Nothing, Text} from '#common';
import {corePackageType, DeclarationSemantic, TypeSemantic} from '#core';
import {$Type, Model} from '#typing';

export type DeclarationScope<T extends DeclarationSemantic = DeclarationSemantic> = Model & {
  imports: ArrayData<DeclarationScope> | Nothing;
  parent: DeclarationScope | Nothing;
  declarations: Dictionary<Text, ArrayData<T>>;

  count(): Integer;
  add(declaration: T): void;
  all(): ArrayData<T>;

  filterByName<V extends $Type>(type: V, name: Text): ArrayData<Exclude<V['type'], undefined>>;

  find<V extends $Type>(
    type: V,
    name: Text,
    generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
    parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
  ): Exclude<V['type'], undefined> | Nothing;

  clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T>;
  union(other: DeclarationScope<T>): DeclarationScope<T>;
  intersection(other: DeclarationScope<T>): DeclarationScope<T>;
  complement(other: DeclarationScope<T>): DeclarationScope<T>;
};

export const $DeclarationScope = corePackageType<DeclarationScope>('DeclarationScope');
