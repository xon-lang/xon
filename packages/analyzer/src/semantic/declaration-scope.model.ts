import {analyzerPackageType, DeclarationSemantic, TypeSemantic} from '#analyzer';
import {ArrayData, Dictionary, Integer, Nothing, Text} from '#common';
import {$Type, Brand, Model} from '#typing';

export type DeclarationScope<T extends DeclarationSemantic = DeclarationSemantic> = Model &
  Brand<'Analyzer.DeclarationScope'> & {
    imports: ArrayData<DeclarationScope> | Nothing;
    parent: DeclarationScope | Nothing;
    declarations: Dictionary<Text, ArrayData<T>>;

    // todo !!! remove
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

export const $DeclarationScope = analyzerPackageType<DeclarationScope>('DeclarationScope');
