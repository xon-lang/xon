import {IssueManager} from '../issue/issue-manager';
import {Nothing, String2} from '../lib/core';
import {Node} from '../parser/node/node';
import {Source} from '../source/source';
import {SourceReference, sourceReference} from '../source/source-reference';
import {coreDeclarationSemantic} from './core';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {DeclarationSemantic} from './declaration/declaration-semantic';
import {SemanticConfig, createSemanticConfig} from './semantic-config';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  config: SemanticConfig;
  source: Source;
  issueManager: IssueManager;
  declarationManager: DeclarationManager;

  createChildContext: () => SemanticContext;
  createReference: (node: Node) => SourceReference;
  coreDeclaration(name: String2): DeclarationSemantic;
}

export function semanticContext(
  parent: SemanticContext | Nothing,
  config: Partial<SemanticConfig> | Nothing,
  source: Source,
  issueManager: IssueManager,
): SemanticContext {
  return {
    parent,
    config: createSemanticConfig(config),
    source,
    issueManager,
    declarationManager: createDeclarationManager(issueManager, parent?.declarationManager),

    createChildContext(): SemanticContext {
      return semanticContext(this, this.config, this.source, this.issueManager);
    },

    createReference(node: Node): SourceReference {
      return sourceReference(this.source, node.range);
    },

    coreDeclaration(name: String2): DeclarationSemantic {
      return coreDeclarationSemantic(name, this.config.coreDir);
    },
  };
}
