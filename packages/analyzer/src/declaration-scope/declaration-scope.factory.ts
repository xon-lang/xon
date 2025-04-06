import {$DeclarationScope, DeclarationScope, DeclarationSemantic} from '#analyzer';
import {
  ArrayData,
  Boolean2,
  Integer,
  KeyValue,
  newArrayData,
  newDictionary,
  Nothing,
  Number2,
  Text,
} from '#common';

export function newDeclarationScope(
  declarations: ArrayData<DeclarationSemantic> = newArrayData(),
): DeclarationScope {
  // const array = is(declarations, $ArrayData()) || is(declarations, $Dictionary())? declarations:
  const base = newDictionary<Text, ArrayData<DeclarationSemantic>>();

  for (const declaration of declarations) {
    if (!base.has(declaration.name)) {
      base.set(declaration.name, newArrayData());
    }

    base.get(declaration.name)!.addLastItem(declaration);
  }

  return {
    ...base,
    $: $DeclarationScope(),

    slice(startIndex: Integer, stopIndex?: Integer | Nothing): DeclarationScope {
      // todo remove all nested methods or '.values().flat()'
      return newDeclarationScope(base.slice(startIndex, stopIndex).values().flat());
    },

    addFirstItems(items: ArrayData<KeyValue<Text, ArrayData<DeclarationSemantic>>>): DeclarationScope {
      return newDeclarationScope(base.addFirstItems(items).values().flat());
    },

    addFirstItem(item: KeyValue<Text, ArrayData<DeclarationSemantic>>): DeclarationScope {
      return newDeclarationScope(base.addFirstItem(item).values().flat());
    },

    addLastItems(items: ArrayData<KeyValue<Text, ArrayData<DeclarationSemantic>>>): DeclarationScope {
      return newDeclarationScope(base.addLastItems(items).values().flat());
    },

    addLastItem(item: KeyValue<Text, ArrayData<DeclarationSemantic>>): DeclarationScope {
      return newDeclarationScope(base.addLastItem(item).values().flat());
    },

    removeFirst(length?: Integer | Nothing): DeclarationScope {
      return newDeclarationScope(base.removeFirst(length).values().flat());
    },

    removeLast(length?: Integer | Nothing): DeclarationScope {
      return newDeclarationScope(base.removeLast(length).values().flat());
    },

    takeWhile(
      predicate: (value: KeyValue<Text, ArrayData<DeclarationSemantic>>, index: Integer) => Boolean2,
      startIndex?: Integer,
      includeConditionItem?: Boolean2,
    ): DeclarationScope {
      return newDeclarationScope(base.takeWhile(predicate, startIndex, includeConditionItem).values().flat());
    },

    take(length: Integer, startIndex?: Integer): DeclarationScope {
      return newDeclarationScope(base.take(length, startIndex).values().flat());
    },

    sort(
      compareFn?: (
        a: KeyValue<Text, ArrayData<DeclarationSemantic>>,
        b: KeyValue<Text, ArrayData<DeclarationSemantic>>,
      ) => Number2,
    ): DeclarationScope {
      return newDeclarationScope(base.sort(compareFn).values().flat());
    },

    sortBy(
      select: (item: KeyValue<Text, ArrayData<DeclarationSemantic>>) => Number2,
      ascending?: Boolean2,
    ): DeclarationScope {
      return newDeclarationScope(base.sortBy(select, ascending).values().flat());
    },

    clone(): DeclarationScope {
      return newDeclarationScope(base.values().flat());
    },

    equals(other: DeclarationScope): Boolean2 {
      return this === other;
    },

    //

    add(declaration: DeclarationSemantic): void {
      // if (is(declaration, $ValueDeclarationSemantic()) && this.find($DeclarationSemantic(), declaration.name)) {
      //   analyzer.diagnosticManager.addPredefinedDiagnostic(declaration.nodeLink.reference, (x) =>
      //     x.declarationAlreadyExists(),
      //   );
      // }

      if (!this.has(declaration.name)) {
        this.set(declaration.name, newArrayData());
      }

      this.get(declaration.name)?.addLastItem(declaration);
    },

    // filterByName<V extends $Type>(type: V, name: Text): ArrayData<Exclude<V['type'], undefined>> {
    //   const thisDeclarations = this.declarations.get(name);
    //   const parentDeclarations = this.parent?.filterByName(type, name);
    //   const declarations = (thisDeclarations! ?? parentDeclarations)?.filter((x) => is(x, type));

    //   if (declarations && declarations.count() > 0) {
    //     return declarations;
    //   }

    //   const importDeclarations = this.imports?.flatMap(
    //     (x) =>
    //       x.declarations.get(name)?.filter((x) => is(x, type)) ??
    //       newArrayData<Exclude<V['type'], undefined>>(),
    //   );

    //   if (importDeclarations && importDeclarations.count() > 0) {
    //     return importDeclarations;
    //   }

    //   return newArrayData();
    // },

    // find<V extends $Type>(
    //   type: V,
    //   name: Text,
    //   generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
    //   parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
    // ): Exclude<V['type'], undefined> | Nothing {
    //   const declarations = this.filterByName(type, newText(name));

    //   if (declarations.isEmpty()) {
    //     // analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) =>
    //     //   x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
    //     // );

    //     return nothing;
    //   }

    //   // todo fix it
    //   const filtered = declarations; // .filter((x) =>
    //   //   generics && x.generics ? x.generics.length === generics.length : true,
    //   // );

    //   if (filtered.count() !== 1) {
    //     // diagnosticManager.addError(node, DIAGNOSTIC_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

    //     return nothing;
    //   }

    //   return filtered.first();
    // },

    // clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T> {
    //   const declarationManager = newDeclarationScope<T>();

    //   // todo simplify it. allow create declaration manager from 'declarations' field
    //   for (const declaration of this.all()) {
    //     declarationManager.add(declaration);
    //   }

    //   return declarationManager;
    // },

    // union(other: DeclarationScope<T>): DeclarationScope<T> {
    //   const newDeclarationManager = newDeclarationScope<T>();
    //   const allDeclarations = [...this.all(), ...other.all()];

    //   for (const declaration of allDeclarations) {
    //     newDeclarationManager.add(declaration);
    //   }

    //   return newDeclarationManager;
    // },

    // intersection(other: DeclarationScope<T>): DeclarationScope<T> {
    //   // todo add 'intersection' logic instead of 'union'
    //   return this.union(other);
    // },

    // complement(other: DeclarationScope<T>): DeclarationScope<T> {
    //   // todo add 'complement' logic instead of 'union'
    //   return this.union(other);
    // },

    // equals(other: DeclarationScope): Boolean2 {
    //   return this === other;
    // },
  };
}
