import {
  ArrayData,
  Boolean2,
  Integer,
  newArrayData,
  newDictionary,
  newText,
  Nothing,
  nothing,
  Text,
} from '#common';
import {$DeclarationScope, DeclarationScope, DeclarationSemantic, TypeSemantic} from '#core';
import {$Type, is} from '#typing';

export function newDeclarationScope<T extends DeclarationSemantic = DeclarationSemantic>(
  parent?: DeclarationScope<T> | Nothing,
  imports?: ArrayData<DeclarationScope<T>> | Nothing,
): DeclarationScope<T> {
  return {
    $: $DeclarationScope,
    imports,
    parent,
    declarations: newDictionary(),

    count(): Integer {
      return this.declarations.length();
    },

    add(declaration: T): void {
      // if (is(declaration, $ValueDeclarationSemantic) && this.find($DeclarationSemantic, declaration.name)) {
      //   analyzer.diagnosticManager.addPredefinedDiagnostic(declaration.nodeLink.reference, (x) =>
      //     x.declarationAlreadyExists(),
      //   );
      // }

      if (!this.declarations.has(declaration.name)) {
        this.declarations.set(declaration.name, newArrayData());
      }

      this.declarations.get(declaration.name)?.addLastItem(declaration);
    },

    all(): ArrayData<T> {
      return this.declarations.values().flat();
    },

    filterByName<V extends $Type>(type: V, name: Text): ArrayData<Exclude<V['type'], undefined>> {
      const thisDeclarations = this.declarations.get(name);
      const parentDeclarations = this.parent?.filterByName(type, name);
      const declarations = (thisDeclarations! ?? parentDeclarations)?.filter((x) => is(x, type));

      if (declarations && declarations.length() > 0) {
        return declarations;
      }

      const importDeclarations = this.imports?.flatMap(
        (x) =>
          x.declarations.get(name)?.filter((x) => is(x, type)) ??
          newArrayData<Exclude<V['type'], undefined>>(),
      );

      if (importDeclarations && importDeclarations.length() > 0) {
        return importDeclarations;
      }

      return newArrayData();
    },

    find<V extends $Type>(
      type: V,
      name: Text,
      generics?: ArrayData<TypeSemantic | Nothing> | Nothing,
      parameters?: ArrayData<TypeSemantic | Nothing> | Nothing,
    ): Exclude<V['type'], undefined> | Nothing {
      const declarations = this.filterByName(type, newText(name));

      if (declarations.isEmpty()) {
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
      const declarationManager = newDeclarationScope<T>();

      // todo simplify it. allow create declaration manager from 'declarations' field
      for (const declaration of this.all()) {
        declarationManager.add(declaration);
      }

      return declarationManager;
    },

    union(other: DeclarationScope<T>): DeclarationScope<T> {
      const newDeclarationManager = newDeclarationScope<T>();
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

    equals(other: DeclarationScope): Boolean2 {
      return this === other;
    },
  };
}
