import {IssueManager} from '../issue/issue-manager';
import {Array2, Integer, Nothing, String2, nothing} from '../lib/core';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {$Semantic, semanticIs} from './semantic';
import {SemanticConfig} from './semantic-config';
import {TypeSemantic} from './type/type-semantic';

export enum DeclarationKind {
  ANY = 'ANY',
  TYPE = 'TYPE',
  // todo should we use const here or we need check declarations by some restrictions ???
  CONST = 'CONST',
  VALUE = 'VALUE',
}

export interface DeclarationManager {
  imports: Array2<DeclarationManager> | Nothing;
  declarations: Record<String2, Array2<DeclarationSemantic>>;

  count(): Integer;
  add(declaration: DeclarationSemantic): Nothing;
  filterByName(kind: DeclarationKind, name: String2): Array2<DeclarationSemantic>;
  all(): Array2<DeclarationSemantic>;

  single(
    kind: DeclarationKind,
    name: String2,
    generics: Array2<TypeSemantic | Nothing> | Nothing,
    parameters: Array2<TypeSemantic | Nothing> | Nothing,
  ): DeclarationSemantic | Nothing;
}

export function createDeclarationManager(
  issueManager: IssueManager,
  parentDeclarationManager: DeclarationManager | Nothing,
  imports: Array2<DeclarationManager> | Nothing,
  config: SemanticConfig,
): DeclarationManager {
  return {
    imports,
    declarations: {},

    count(): Integer {
      return Object.keys(this.declarations).length;
    },

    add(declaration: DeclarationSemantic): Nothing {
      if (!this.declarations[declaration.name]) {
        this.declarations[declaration.name] = [];
      }

      this.declarations[declaration.name].push(declaration);
    },

    filterByName(kind: DeclarationKind, name: String2): Array2<DeclarationSemantic> {
      let declarations = this.declarations[name] ?? parentDeclarationManager?.filterByName(kind, name);
      declarations = declarations?.filter((x) => isDeclarationKind(x, kind));

      if (declarations && declarations.length > 0) {
        return declarations;
      }

      const importDeclarations = this.imports?.flatMap((x) =>
        x.declarations[name]?.filter((x) => isDeclarationKind(x, kind)),
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
      kind: DeclarationKind,
      name: String2,
      generics: Array2<TypeSemantic | Nothing> | Nothing,
      parameters: Array2<TypeSemantic | Nothing> | Nothing,
    ): DeclarationSemantic | Nothing {
      const declarations = this.filterByName(kind, name);

      if (declarations.length === 0) {
        // issueManager.addError(node, ISSUE_MESSAGE.declarationNotFound(node.text));

        return nothing;
      }

      const filtered = declarations.filter((x) =>
        generics && x.generics ? x.generics.length === generics.length : true,
      );

      if (filtered.length !== 1) {
        // issueManager.addError(node, ISSUE_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

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
  if (kind === DeclarationKind.ANY) {
    return true;
  }

  if (kind === DeclarationKind.TYPE && semanticIs<T>(declaration, $Semantic.TYPE_DECLARATION)) {
    return true;
  }

  if (kind === DeclarationKind.VALUE && semanticIs<T>(declaration, $Semantic.VALUE_DECLARATION)) {
    return true;
  }

  return false;
}
