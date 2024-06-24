import {Array2, Nothing, nothing} from '../../../lib/types';
import {AnalyzerDiagnosticManager} from '../../diagnostic/analyzer-diagnostic-manager';
import {TextResource, textResourceFrom} from '../../util/resource/text/text-resource';
import {TextResourceRange, textResourceRange} from '../../util/resource/text/text-resource-range';
import {Node} from '../syntax/node';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {SemanticAnalyzerConfig} from './semantic-analyzer-config';

export interface SemanticAnalyzerContext {
  parent: SemanticAnalyzerContext | Nothing;
  config: SemanticAnalyzerConfig;
  resource: TextResource;
  issueManager: AnalyzerDiagnosticManager;
  declarationManager: DeclarationManager;

  createChildContext: () => SemanticAnalyzerContext;
  createReference: (node: Node) => TextResourceRange;
}

export function semanticContext(
  parent: SemanticAnalyzerContext | Nothing,
  resource: TextResource,
  issueManager: AnalyzerDiagnosticManager,
  imports: Array2<DeclarationManager> | Nothing,
  config: SemanticAnalyzerConfig,
): SemanticAnalyzerContext {
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

    createChildContext(): SemanticAnalyzerContext {
      return semanticContext(this, this.resource, this.issueManager, nothing, this.config);
    },

    createReference(node: Node): TextResourceRange {
      const resource = textResourceFrom(this.resource.location, this.resource.data);

      return textResourceRange(resource, node.range);
    },
  };
}
