import {$, is, TypeMap} from '../../$';
import {Integer, Nothing, nothing, String2} from '../../../lib/types';
import {DeclarationKind, DeclarationSemantic} from './node/declaration/declaration-semantic';
import {TypeSemantic} from './node/type/type-semantic';
import {SemanticAnalyzer} from './semantic-analyzer';

export interface DeclarationScope<T extends DeclarationSemantic = DeclarationSemantic> {
  imports: DeclarationScope[] | Nothing;
  parent: DeclarationScope | Nothing;
  declarations: Record<String2, T[]>;

  count(): Integer;
  add(declaration: T): void;
  all(): T[];

  filterByName<KIND extends DeclarationKind>(kind: KIND, name: String2): TypeMap[KIND][];

  find<KIND extends DeclarationKind>(
    kind: KIND,
    name: String2,
    generics?: TypeSemantic | Nothing[] | Nothing,
    parameters?: TypeSemantic | Nothing[] | Nothing,
  ): TypeMap[KIND] | Nothing;

  clone(generics?: TypeSemantic | Nothing[] | Nothing): DeclarationScope<T>;
  union(other: DeclarationScope<T>): DeclarationScope<T>;
  intersection(other: DeclarationScope<T>): DeclarationScope<T>;
  complement(other: DeclarationScope<T>): DeclarationScope<T>;
}

export function createDeclarationScope<T extends DeclarationSemantic = DeclarationSemantic>(
  analyzer: SemanticAnalyzer,
  parent?: DeclarationScope<T> | Nothing,
  imports?: DeclarationScope<T>[] | Nothing,
): DeclarationScope<T> {
  return {
    imports,
    parent,
    declarations: {},

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: T): void {
      if (is(declaration, $.ValueDeclarationSemantic) && this.find($.DeclarationSemantic, declaration.name)) {
        analyzer.diagnosticManager.addPredefinedDiagnostic(declaration.nodeLink.reference, (x) =>
          x.declarationAlreadyExists(),
        );
      }

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

    find<KIND extends DeclarationKind>(kind: KIND, name: String2): TypeMap[KIND] | Nothing {
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

    clone(generics?: TypeSemantic | Nothing[] | Nothing): DeclarationScope<T> {
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
