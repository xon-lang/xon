import {ArrayData, Dictionary, Text, newArrayData, newDictionary, newText} from '#common';
import {DeclarationKind, DeclarationSemantic, SemanticAnalyzer, TypeSemantic} from '#core';
import {Integer, Nothing, is, nothing} from '#typing';

export type DeclarationScope<T extends DeclarationSemantic = DeclarationSemantic> = $Model & {
  imports: ArrayData<DeclarationScope> | Nothing;
  parent: DeclarationScope | Nothing;
  declarations: Dictionary<Text, ArrayData<T>>;

  count(): Integer;
  add(declaration: T): void;
  all(): ArrayData<T>;

  filterByName<KIND extends DeclarationKind>(kind: KIND, name: Text): ArrayData<TypeMap[KIND]>;

  find<KIND extends DeclarationKind>(
    kind: KIND,
    name: Text,
    generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
    parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
  ): TypeMap[KIND] | Nothing;

  clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T>;
  union(other: DeclarationScope<T>): DeclarationScope<T>;
  intersection(other: DeclarationScope<T>): DeclarationScope<T>;
  complement(other: DeclarationScope<T>): DeclarationScope<T>;
};

export function createDeclarationScope<T extends DeclarationSemantic = DeclarationSemantic>(
  analyzer: SemanticAnalyzer,
  parent?: DeclarationScope<T> | Nothing,
  imports?: ArrayData<DeclarationScope<T>> | Nothing,
): DeclarationScope<T> {
  return {
    $: $.DeclarationScope,
    imports,
    parent,
    declarations: newDictionary(),

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: T): void {
      // if (is(declaration, $.ValueDeclarationSemantic) && this.find($.DeclarationSemantic, declaration.name)) {
      //   analyzer.diagnosticManager.addPredefinedDiagnostic(declaration.nodeLink.reference, (x) =>
      //     x.declarationAlreadyExists(),
      //   );
      // }

      if (!this.declarations.has(declaration.name)) {
        this.declarations.set(declaration.name, newArrayData());
      }

      this.declarations.get(declaration.name)?.addLast(declaration);
    },

    all(): ArrayData<T> {
      return this.declarations.values().flat();
    },

    filterByName<K extends DeclarationKind>(kind: K, name: Text): ArrayData<TypeMap[K]> {
      const thisDeclarations = this.declarations.get(name);
      const parentDeclarations = this.parent?.filterByName<K>(kind, name);
      const declarations = (thisDeclarations! ?? parentDeclarations)?.filter((x) => is(x, kind));

      if (declarations && declarations.length() > 0) {
        return declarations;
      }

      const importDeclarations = this.imports?.toArray()?.flatMap(
        (x) =>
          x.declarations
            .get(name)
            ?.toArray()
            ?.filter((x) => is(x, kind)) ?? [],
      );

      if (importDeclarations && importDeclarations.length > 0) {
        // todo remove 'as'
        return newArrayData(importDeclarations) as ArrayData<TypeMap[K]>;
      }

      // todo remove 'as'
      return newArrayData() as ArrayData<TypeMap[K]>;
    },

    find<KIND extends DeclarationKind>(
      kind: KIND,
      name: Text,
      generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
      parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
    ): TypeMap[KIND] | Nothing {
      const declarations = this.filterByName(kind, newText(name));

      if (declarations.length() === 0) {
        // analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) =>
        //   x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
        // );

        return nothing;
      }

      // todo fix it
      const filtered = declarations; // .filter((x) =>
      //   generics && x.generics ? x.generics.length === generics.length : true,
      // );

      if (filtered.length() !== 1) {
        // diagnosticManager.addError(node, DIAGNOSTIC_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },

    clone(generics?: ArrayData<TypeSemantic | Nothing> | Nothing): DeclarationScope<T> {
      const declarationManager = createDeclarationScope<T>(analyzer);

      // todo simplify it. allow create declaration manager from 'declarations' field
      for (const declaration of this.all()) {
        declarationManager.add(declaration);
      }

      return declarationManager;
    },

    union(other: DeclarationScope<T>): DeclarationScope<T> {
      const newDeclarationManager = createDeclarationScope<T>(analyzer);
      const allDeclarations = [...this.all(), ...other.all()];

      for (const declaration of allDeclarations) {
        newDeclarationManager.add(declaration);
      }

      return newDeclarationManager;
    },

    intersection(other: DeclarationScope<T>): DeclarationScope<T> {
      // todo add 'intersection' logic instead of 'union'
      return this.union(other);
    },

    complement(other: DeclarationScope<T>): DeclarationScope<T> {
      // todo add 'complement' logic instead of 'union'
      return this.union(other);
    },
  };
}
