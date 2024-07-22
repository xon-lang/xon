import {$, is, TypeMap} from '../../$';
import {Array2, Integer, Nothing, nothing, String2} from '../../../lib/types';
import {DeclarationSemantic} from './node/declaration/declaration-semantic';
import {TypeSemantic} from './node/type/type-semantic';

export type DeclarationKind =
  | $.DeclarationSemantic
  | $.TypeDeclarationSemantic
  | $.NominalTypeDeclarationSemantic
  | $.StructuralTypeDeclarationSemantic
  | $.ValueDeclarationSemantic
  | $.MethodValueDeclarationSemantic
  | $.PropertyValueDeclarationSemantic;

export interface DeclarationManager {
  imports: Array2<DeclarationManager> | Nothing;
  parent: DeclarationManager | Nothing;
  declarations: Record<String2, Array2<DeclarationSemantic>>;

  count(): Integer;
  add(declaration: DeclarationSemantic): void;
  all(): Array2<DeclarationSemantic>;

  filterByName<KIND extends DeclarationKind>(kind: KIND, name: String2): Array2<TypeMap[KIND]>;

  single<KIND extends DeclarationKind>(
    kind: KIND,
    name: String2,
    generics?: Array2<TypeSemantic | Nothing> | Nothing,
    parameters?: Array2<TypeSemantic | Nothing> | Nothing,
  ): TypeMap[KIND] | Nothing;

  clone(generics?: Array2<TypeSemantic | Nothing> | Nothing): DeclarationManager;
  union(other: DeclarationManager): DeclarationManager;
  intersection(other: DeclarationManager): DeclarationManager;
  complement(other: DeclarationManager): DeclarationManager;
}

export function createDeclarationManager(
  parent?: DeclarationManager | Nothing,
  imports?: Array2<DeclarationManager> | Nothing,
): DeclarationManager {
  return {
    imports,
    parent,
    declarations: {},

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: DeclarationSemantic): void {
      if (!this.declarations[declaration.name]) {
        this.declarations[declaration.name] = [];
      }

      this.declarations[declaration.name].push(declaration);
    },

    all(): Array2<DeclarationSemantic> {
      return Object.values(this.declarations).flat();
    },

    filterByName<KIND extends DeclarationKind>(kind: KIND, name: String2): Array2<TypeMap[KIND]> {
      const declarations = (this.declarations[name] ?? this.parent?.filterByName<KIND>(kind, name))?.filter(
        (x) => is(x, kind),
      );

      if (declarations && declarations.length > 0) {
        return declarations;
      }

      const importDeclarations = this.imports?.flatMap((x) =>
        x.declarations[name]?.filter((x) => is(x, kind)),
      );

      if (importDeclarations && importDeclarations?.length > 0) {
        return importDeclarations;
      }

      return [];
    },

    single<KIND extends DeclarationKind>(
      kind: KIND,
      name: String2,
      generics: Array2<TypeSemantic | Nothing> | Nothing,
      // parameters: Array2<TypeSemantic | Nothing> | Nothing,
    ): TypeMap[KIND] | Nothing {
      const declarations = this.filterByName(kind, name);

      if (declarations.length === 0) {
        // diagnosticManager.addError(node, DIAGNOSTIC_MESSAGE.declarationNotFound(node.text));

        return nothing;
      }

      const filtered = declarations.filter((x) =>
        generics && x.generics ? x.generics.length === generics.length : true,
      );

      if (filtered.length !== 1) {
        // diagnosticManager.addError(node, DIAGNOSTIC_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },

    clone(generics?: Array2<TypeSemantic | Nothing> | Nothing): DeclarationManager {
      const declarationManager = createDeclarationManager();

      // todo simplify it. allow create declaration manager from 'declarations' field
      for (const declaration of this.all()) {
        declarationManager.add(declaration);
      }

      return declarationManager;
    },

    union(other: DeclarationManager): DeclarationManager {
      const newDeclarationManager = createDeclarationManager();
      const allDeclarations = [...this.all(), ...other.all()];

      for (const declaration of allDeclarations) {
        newDeclarationManager.add(declaration);
      }

      return newDeclarationManager;
    },

    intersection(other: DeclarationManager): DeclarationManager {
      // todo add 'intersection' logic instead of 'union'
      return this.union(other);
    },

    complement(other: DeclarationManager): DeclarationManager {
      // todo add 'complement' logic instead of 'union'
      return this.union(other);
    },
  };
}
