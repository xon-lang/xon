import {IssueManager} from '../issue/issue-manager';
import {ISSUE_MESSAGE} from '../issue/issue-message';
import {Integer, Nothing, String2, nothing} from '../lib/core';
import {Node} from '../parser/node/node';
import {IdNode} from '../parser/node/token/id/id-node';
import {Source} from '../source/source';
import {SourceReference, sourceReference} from '../source/source-reference';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {ModelSemantic} from './declaration/model/model-semantic';
import {ParameterSemantic} from './declaration/parameter/parameter-semantic';
import {$Semantic, semanticIs} from './semantic';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  source: Source;
  issueManager: IssueManager;
  declarations: Record<String2, DeclarationSemantic[]>;

  createChildContext: () => SemanticContext;
  createReference: (node: Node) => SourceReference;
  addDeclaration: (declaration: DeclarationSemantic) => void;

  findDeclarations: (name: String2) => DeclarationSemantic[];
  findSingleDeclaration: (
    node: IdNode,
    genericLength: Integer,
    parameters: ParameterSemantic[] | Nothing,
  ) => DeclarationSemantic | Nothing;
}

export function semanticContext(
  parent: SemanticContext | Nothing,
  source: Source,
  issueManager: IssueManager,
): SemanticContext {
  return {
    parent,
    source,
    issueManager,
    declarations: {},

    createChildContext(): SemanticContext {
      return semanticContext(this, this.source, this.issueManager);
    },

    createReference(node: Node): SourceReference {
      return sourceReference(this.source, node.range.start);
    },

    addDeclaration(declaration: DeclarationSemantic): void {
      if (!this.declarations[declaration.name]) {
        this.declarations[declaration.name] = [];
      }

      this.declarations[declaration.name].push(declaration);
    },

    findDeclarations(name: String2): DeclarationSemantic[] {
      return this.declarations[name] ?? this.parent?.findDeclarations(name) ?? [];
    },

    findSingleDeclaration(
      node: IdNode,
      genericLength: Integer,
      parameters: ParameterSemantic[] | Nothing,
    ): DeclarationSemantic | Nothing {
      const declarations = this.findDeclarations(node.text);

      if (declarations.length === 0) {
        this.issueManager.addError(node, ISSUE_MESSAGE.declarationNotFound(node.text));

        return nothing;
      }

      // todo also check other declarations instead of model, mb we need all declarations must contains generics
      const filtered = declarations.filter(
        (x) => semanticIs<ModelSemantic>(x, $Semantic.MODEL) && x.generics.length === genericLength,
      );

      if (filtered.length !== 1) {
        this.issueManager.addError(node, ISSUE_MESSAGE.tooManyDeclarationsFoundWithName(node.text));

        return nothing;
      }

      return filtered.first();
    },
  };
}
