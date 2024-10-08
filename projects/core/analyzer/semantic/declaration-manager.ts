import {$, is, TypeMap} from '../../$';
import {Integer, Nothing, nothing, String2} from '../../../lib/types';
import {DeclarationSemantic} from './node/declaration/declaration-semantic';
import {TypeSemantic} from './node/type/type-semantic';

export type DeclarationKind =
  | $.DeclarationSemantic
  | $.TypeDeclarationSemantic
  | $.NominalTypeDeclarationSemantic
  | $.StructuralTypeDeclarationSemantic
  | $.ValueDeclarationSemantic
  | $.AttributeValueDeclarationSemantic;

export interface DeclarationManager<T extends DeclarationSemantic = DeclarationSemantic> {
  imports: DeclarationManager[] | Nothing;
  parent: DeclarationManager | Nothing;
  declarations: Record<String2, T[]>;

  count(): Integer;
  add(declaration: T): void;
  all(): T[];

  filterByName<KIND extends DeclarationKind>(kind: KIND, name: String2): TypeMap[KIND][];

  single<KIND extends DeclarationKind>(
    kind: KIND,
    name: String2,
    generics?: TypeSemantic | Nothing[] | Nothing,
    parameters?: TypeSemantic | Nothing[] | Nothing,
  ): TypeMap[KIND] | Nothing;

  clone(generics?: TypeSemantic | Nothing[] | Nothing): DeclarationManager<T>;
  union(other: DeclarationManager<T>): DeclarationManager<T>;
  intersection(other: DeclarationManager<T>): DeclarationManager<T>;
  complement(other: DeclarationManager<T>): DeclarationManager<T>;
}

export function createDeclarationManager<T extends DeclarationSemantic = DeclarationSemantic>(
  parent?: DeclarationManager<T> | Nothing,
  imports?: DeclarationManager<T>[] | Nothing,
): DeclarationManager<T> {
  return {
    imports,
    parent,
    declarations: {},

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: T): void {
      if (!this.declarations[declaration.name]) {
        this.declarations[declaration.name] = [];
      }

      this.declarations[declaration.name].push(declaration);
    },

    all(): T[] {
      return Object.values(this.declarations).flat();
    },

    filterByName<KIND extends DeclarationKind>(kind: KIND, name: String2): TypeMap[KIND][] {
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

    single<KIND extends DeclarationKind>(kind: KIND, name: String2): TypeMap[KIND] | Nothing {
      const declarations = this.filterByName(kind, name);

      if (declarations.length === 0) {
        // analyzer.diagnosticManager.addPredefinedDiagnostic(node.reference, (x) =>
        //   x.declarationNotFound(analyzer.config.literalTypeNames.integerTypeName),
        // );

        return nothing;
      }

      // todo fix it
      const filtered = declarations; // .filter((x) =>
      //   generics && x.generics ? x.generics.length === generics.length : true,
      // );

      if (filtered.length !== 1) {
        // diagnosticManager.addError(node, DIAGNOSTIC_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },

    clone(generics?: TypeSemantic | Nothing[] | Nothing): DeclarationManager<T> {
      const declarationManager = createDeclarationManager<T>();

      // todo simplify it. allow create declaration manager from 'declarations' field
      for (const declaration of this.all()) {
        declarationManager.add(declaration);
      }

      return declarationManager;
    },

    union(other: DeclarationManager<T>): DeclarationManager<T> {
      const newDeclarationManager = createDeclarationManager<T>();
      const allDeclarations = [...this.all(), ...other.all()];

      for (const declaration of allDeclarations) {
        newDeclarationManager.add(declaration);
      }

      return newDeclarationManager;
    },

    intersection(other: DeclarationManager<T>): DeclarationManager<T> {
      // todo add 'intersection' logic instead of 'union'
      return this.union(other);
    },

    complement(other: DeclarationManager<T>): DeclarationManager<T> {
      // todo add 'complement' logic instead of 'union'
      return this.union(other);
    },
  };
}
