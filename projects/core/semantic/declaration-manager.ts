import {IssueManager} from '../issue/issue-manager';
import {Integer, Nothing, String2, nothing} from '../lib/core';
import {coreDeclarationSemantic} from './core';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {SemanticConfig} from './semantic-config';

export interface DeclarationManager {
  declarations: Record<String2, DeclarationSemantic[]>;

  count(): Integer;
  add: (declaration: DeclarationSemantic) => Nothing;
  findAll: (name: String2) => DeclarationSemantic[];
  findSingle: (
    name: String2,
    genericLength: Integer,
    parameters: DeclarationSemantic[] | Nothing,
  ) => DeclarationSemantic | Nothing;
  findCore(name: String2): DeclarationSemantic | Nothing;
}

export function createDeclarationManager(
  issueManager: IssueManager,
  parentDeclarationManager: DeclarationManager | Nothing,
  config: SemanticConfig,
): DeclarationManager {
  return {
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

    findAll(name: String2): DeclarationSemantic[] {
      const declarations: DeclarationSemantic[] | Nothing =
        this.declarations[name] ?? parentDeclarationManager?.findAll(name);

      if (declarations && declarations.length > 0) {
        return declarations;
      }

      const coreDeclaration = this.findCore(name);

      if (coreDeclaration) {
        return [coreDeclaration];
      }

      return [];
    },

    findSingle(
      name: String2,
      genericLength: Integer,
      parameters: DeclarationSemantic[] | Nothing,
    ): DeclarationSemantic | Nothing {
      const declarations = this.findAll(name);

      if (declarations.length === 0) {
        // issueManager.addError(node, ISSUE_MESSAGE.declarationNotFound(node.text));

        return nothing;
      }

      const filtered = declarations.filter((x) => (x.generics?.length ?? 0) === genericLength);

      if (filtered.length !== 1) {
        // issueManager.addError(node, ISSUE_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },

    findCore(name: String2): DeclarationSemantic | Nothing {
      return coreDeclarationSemantic(name, config.corePath);
    },
  };
}
