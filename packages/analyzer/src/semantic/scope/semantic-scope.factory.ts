import {$SemanticScope, DeclarationSemantic, SemanticScope} from '#analyzer';
import {
  $Dictionary,
  ArrayData,
  Boolean2,
  Dictionary,
  Integer,
  newArrayData,
  newDictionary,
  Nothing,
  Text,
} from '#common';
import {is} from '#typing';

export function newSemanticScope(
  declarations?: Dictionary<Text, ArrayData<DeclarationSemantic>> | ArrayData<DeclarationSemantic> | Nothing,
  parent?: SemanticScope | Nothing,
  isTypeScope?: Boolean2 | Nothing,
): SemanticScope {
  let _declarations: Dictionary<Text, ArrayData<DeclarationSemantic>> | Nothing;

  if (is(declarations, $Dictionary())) {
    _declarations = declarations;
  } else if (declarations) {
    _declarations = newDictionary<Text, ArrayData<DeclarationSemantic>>();

    for (const declaration of declarations) {
      if (!_declarations.has(declaration.name)) {
        _declarations.set(declaration.name, newArrayData());
      }

      _declarations.get(declaration.name)!.addLastItem(declaration);
    }
  }

  return {
    $: $SemanticScope(),
    _declarations,
    parent,
    isTypeScope,

    add(declaration: DeclarationSemantic): void {
      this._declarations ??= newDictionary();

      const overloads = this._declarations.get(declaration.name);

      if (overloads) {
        overloads.addLastItem(declaration);
      } else {
        this._declarations.set(declaration.name, newArrayData([declaration]));
      }
    },

    has(name: Text): Boolean2 {
      return this._declarations?.has(name) ?? false;
    },

    get(name: Text): ArrayData<DeclarationSemantic> | Nothing {
      return this._declarations?.get(name) ?? this.parent?.get(name);
    },

    all(): ArrayData<DeclarationSemantic> | Nothing {
      return this._declarations?.values().flat();
    },

    count(): Integer {
      return this._declarations?.count() ?? 0;
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
