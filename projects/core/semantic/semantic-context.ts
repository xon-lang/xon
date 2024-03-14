import {IssueManager} from '../issue/issue-manager';
import {Nothing} from '../lib/core';
import {Node} from '../parser/node/node';
import {Source} from '../source/source';
import {SourceReference, sourceReference} from '../source/source-reference';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  source: Source;
  issueManager: IssueManager;
  declarationManager: DeclarationManager;

  createChildContext: () => SemanticContext;
  createReference: (node: Node) => SourceReference;
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
    declarationManager: createDeclarationManager(issueManager, parent?.declarationManager),

    createChildContext(): SemanticContext {
      return semanticContext(this, this.source, this.issueManager);
    },

    createReference(node: Node): SourceReference {
      return sourceReference(this.source, node.range);
    },
  };
}
