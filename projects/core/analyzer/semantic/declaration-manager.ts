import {Array2, Integer, Nothing, String2, nothing} from '../../../lib/types';
import {
  DeclarationSemantic,
  isTypeDeclarationSemantic,
  isValueDeclarationSemantic,
} from './node/declaration/declaration-semantic';
import {TypeSemantic} from './node/type/type-semantic';

export enum DeclarationKind {
  TYPE = 'TYPE',
  VALUE = 'VALUE',
}

export interface DeclarationManager {
  imports: Array2<DeclarationManager> | Nothing;
  parent: DeclarationManager | Nothing;
  declarations: Record<String2, Array2<DeclarationSemantic>>;

  count(): Integer;
  add(declaration: DeclarationSemantic): void;
  filterByName(kind: DeclarationKind | Nothing, name: String2): Array2<DeclarationSemantic>;
  all(): Array2<DeclarationSemantic>;

  single(
    kind: DeclarationKind | Nothing,
    name: String2,
    generics: Array2<TypeSemantic | Nothing> | Nothing,
    parameters: Array2<TypeSemantic | Nothing> | Nothing,
  ): DeclarationSemantic | Nothing;
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

    filterByName(kind: DeclarationKind | Nothing, name: String2): Array2<DeclarationSemantic> {
      const declarations = (this.declarations[name] ?? this.parent?.filterByName(kind, name))?.filter(
        (x) => !kind || isDeclarationKind(x, kind),
      );

      if (declarations && declarations.length > 0) {
        return declarations;
      }

      const importDeclarations = this.imports?.flatMap((x) =>
        x.declarations[name]?.filter((x) => !kind || isDeclarationKind(x, kind)),
      );

      if (importDeclarations && importDeclarations?.length > 0) {
        return importDeclarations;
      }

      return [];
    },

    all(): Array2<DeclarationSemantic> {
      return Object.values(this.declarations).flat();
    },

    single(
      kind: DeclarationKind | Nothing,
      name: String2,
      generics: Array2<TypeSemantic | Nothing> | Nothing,
      // parameters: Array2<TypeSemantic | Nothing> | Nothing,
    ): DeclarationSemantic | Nothing {
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
  };
}

function isDeclarationKind<T extends DeclarationSemantic = DeclarationSemantic>(
  declaration: DeclarationSemantic,
  kind: DeclarationKind,
): declaration is T {
  if (kind === DeclarationKind.TYPE && isTypeDeclarationSemantic(declaration)) {
    return true;
  }

  if (kind === DeclarationKind.VALUE && isValueDeclarationSemantic(declaration)) {
    return true;
  }

  return false;
}
