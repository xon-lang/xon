import {IssueManager} from '../issue/issue-manager';
import {Nothing} from '../lib/core';
import {Node} from '../parser/node/node';
import {Source} from '../source/source';
import {SourceReference, sourceReference} from '../source/source-reference';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {SemanticConfig, createSemanticConfig} from './semantic-config';

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
  semanticConfig: Partial<SemanticConfig> | Nothing,
  source: Source,
  issueManager: IssueManager,
): SemanticContext {
  const config = createSemanticConfig(semanticConfig);

  return {
    parent,
    config,
    source,
    issueManager,
    declarationManager: createDeclarationManager(issueManager, parent?.declarationManager, config),

    createChildContext(): SemanticContext {
      return semanticContext(this, this.config, this.source, this.issueManager);
    },

    createReference(node: Node): SourceReference {
      return sourceReference(this.source, node.range);
    },
  };
}
