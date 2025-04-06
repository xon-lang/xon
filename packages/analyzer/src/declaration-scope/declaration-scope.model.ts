import {$AnalyzerType, $DeclarationSemantic, DeclarationSemantic} from '#analyzer';
import {
  $ArrayData,
  $Dictionary,
  $Text,
  ArrayData,
  Boolean2,
  Dictionary,
  Integer,
  KeyValue,
  Nothing,
  Number2,
  Text,
} from '#common';

export interface DeclarationScope extends Dictionary<Text, ArrayData<DeclarationSemantic>> {
  slice(startIndex: Integer, stopIndex?: Integer | Nothing): this;
  addFirstItems(items: ArrayData<KeyValue<Text, ArrayData<DeclarationSemantic>>>): this;
  addFirstItem(item: KeyValue<Text, ArrayData<DeclarationSemantic>>): this;
  addLastItems(items: ArrayData<KeyValue<Text, ArrayData<DeclarationSemantic>>>): this;
  addLastItem(item: KeyValue<Text, ArrayData<DeclarationSemantic>>): this;
  removeFirst(length?: Integer | Nothing): this;
  removeLast(length?: Integer | Nothing): this;
  takeWhile(
    predicate: (value: KeyValue<Text, ArrayData<DeclarationSemantic>>, index: Integer) => Boolean2,
    startIndex?: Integer,
    includeConditionItem?: Boolean2,
  ): this;
  take(length: Integer, startIndex?: Integer): this;
  sort(
    compareFn?: (
      a: KeyValue<Text, ArrayData<DeclarationSemantic>>,
      b: KeyValue<Text, ArrayData<DeclarationSemantic>>,
    ) => Number2,
  ): this;
  sortBy(
    select: (item: KeyValue<Text, ArrayData<DeclarationSemantic>>) => Number2,
    ascending?: Boolean2,
  ): this;
  clone(): this;
  equals(other: this): Boolean2;

  //

  add(declaration: DeclarationSemantic): void;

  // filterByName<V extends $Type>(type: V, name: Text): ArrayData<Exclude<V['type'], undefined>>;

  // find<V extends $Type>(
  //   type: V,
  //   name: Text,
  //   generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
  //   parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
  // ): Exclude<V['type'], undefined> | Nothing;

  // clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T>;
  // union(other: DeclarationScope<T>): DeclarationScope<T>;
  // intersection(other: DeclarationScope<T>): DeclarationScope<T>;
  // complement(other: DeclarationScope<T>): DeclarationScope<T>;
}

export const $DeclarationScope = () =>
  $AnalyzerType<DeclarationScope>(
    'DeclarationScope',
    $Dictionary($Text(), $ArrayData($DeclarationSemantic())),
  );
