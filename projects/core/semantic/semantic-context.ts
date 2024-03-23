import {IssueManager} from '../issue/issue-manager';
import {Array2, Nothing, nothing} from '../lib/core';
import {Node} from '../parser/node/node';
import {Source} from '../source/source';
import {SourceReference, sourceReference} from '../source/source-reference';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {SemanticConfig} from './semantic-config';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  config: SemanticConfig;
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
  imports: Array2<DeclarationManager> | Nothing,
  config: SemanticConfig,
): SemanticContext {
  const declarationManager = createDeclarationManager(issueManager, parent?.declarationManager, imports, config);

  return {
    parent,
    config,
    source,
    issueManager,
    declarationManager,

    createChildContext(): SemanticContext {
      return semanticContext(this, this.source, this.issueManager, nothing, this.config);
    },

    createReference(node: Node): SourceReference {
      return sourceReference(this.source, node.range);
    },
  };
}
