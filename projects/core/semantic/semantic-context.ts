import {IssueManager} from '../issue/issue-manager';
import {Array2, Nothing, nothing} from '../lib/core';
import {Node} from '../parser/node/node';
import {Source} from '../source/source';
import {TextResourceReference, textResourceReference} from '../util/resource/resource-reference';
import {textResourceFrom} from '../util/resource/text/text-resource';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {SemanticConfig} from './semantic-config';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  config: SemanticConfig;
  source: Source;
  issueManager: IssueManager;
  declarationManager: DeclarationManager;

  createChildContext: () => SemanticContext;
  createReference: (node: Node) => TextResourceReference;
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

    createReference(node: Node): TextResourceReference {
      const resource = textResourceFrom(this.source.location, this.source.text);

      return textResourceReference(resource, node.range);
    },
  };
}
