import {Array2, Nothing, nothing} from '../../../lib/types';
import {IssueManager} from '../../issue/issue-manager';
import {TextResource, textResourceFrom} from '../../util/resource/text/text-resource';
import {TextResourceRange, textResourceRange} from '../../util/resource/text/text-resource-reference';
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
  createReference: (node: Node) => TextResourceRange;
}

export function semanticContext(
  parent: SemanticContext | Nothing,
  resource: TextResource,
  issueManager: IssueManager,
  imports: Array2<DeclarationManager> | Nothing,
  config: SemanticConfig,
): SemanticContext {
  const declarationManager = createDeclarationManager(
    // issueManager,
    parent?.declarationManager,
    imports,
    // config,
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

    createReference(node: Node): TextResourceRange {
      const resource = textResourceFrom(this.resource.location, this.resource.data);

      return textResourceRange(resource, node.range);
    },
  };
}
