import {IssueManager} from '../../issue/issue-manager';
import {ISSUE_MESSAGE} from '../../issue/issue-message';
import {Integer, Nothing, String2, nothing} from '../../lib/core';
import {IdNode} from '../../parser/node/token/id/id-node';
import {$Semantic, semanticIs} from '../semantic';
import {DeclarationSemantic} from './declaration-semantic';
import {ModelSemantic} from './model/model-semantic';
import {ParameterSemantic} from './parameter/parameter-semantic';

export interface DeclarationManager {
  declarations: Record<String2, DeclarationSemantic[]>;

  count(): Integer;
  add: (declaration: DeclarationSemantic) => Nothing;
  findAll: (name: String2) => DeclarationSemantic[];
  findSingle: (
    node: IdNode,
    genericLength: Integer,
    parameters: ParameterSemantic[] | Nothing,
  ) => DeclarationSemantic | Nothing;
}

export function createDeclarationManager(
  issueManager: IssueManager,
  parentDeclarationManager: DeclarationManager | Nothing,
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
      return this.declarations[name] ?? parentDeclarationManager?.findAll(name) ?? [];
    },

    findSingle(
      node: IdNode,
      genericLength: Integer,
      parameters: ParameterSemantic[] | Nothing,
    ): DeclarationSemantic | Nothing {
      const declarations = this.findAll(node.text);

      if (declarations.length === 0) {
        issueManager.addError(node, ISSUE_MESSAGE.declarationNotFound(node.text));

        return nothing;
      }

      // todo also check other declarations instead of model, mb we need all declarations must contains generics
      const filtered = declarations.filter(
        (x) => semanticIs<ModelSemantic>(x, $Semantic.MODEL) && x.generics.length === genericLength,
      );

      if (filtered.length !== 1) {
        issueManager.addError(node, ISSUE_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },
  };
}
