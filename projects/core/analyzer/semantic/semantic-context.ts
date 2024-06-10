import {Array2, Nothing, nothing} from '../../../lib/types';
import {IssueManager} from '../../issue/issue-manager';
import {TextResourceReference, textResourceReference} from '../../util/resource/resource-reference';
import {TextResource, textResourceFrom} from '../../util/resource/text/text-resource';
import {Node} from '../syntax/node';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {SemanticConfig} from './semantic-config';

export interface SemanticContext {
  parent: SemanticContext | Nothing;
  config: SemanticConfig;
  resource: TextResource;
  issueManager: IssueManager;
  declarationManager: DeclarationManager;

  createChildContext: () => SemanticContext;
  createReference: (node: Node) => TextResourceReference;
}

export function semanticContext(
  parent: SemanticContext | Nothing,
  resource: TextResource,
  issueManager: IssueManager,
  imports: Array2<DeclarationManager> | Nothing,
  config: SemanticConfig,
): SemanticContext {
  const declarationManager = createDeclarationManager(
    issueManager,
    parent?.declarationManager,
    imports,
    config,
  );

  return {
    parent,
    config,
    resource,
    issueManager,
    declarationManager,

    createChildContext(): SemanticContext {
      return semanticContext(this, this.resource, this.issueManager, nothing, this.config);
    },

    createReference(node: Node): TextResourceReference {
      const resource = textResourceFrom(this.resource.location, this.resource.data);

      return textResourceReference(resource, node.range);
    },
  };
}
