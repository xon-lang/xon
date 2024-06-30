import {Array2, Nothing, nothing} from '../../../lib/types';
import {AnalyzerDiagnosticManager} from '../../diagnostic/analyzer-diagnostic-manager';
import {textResourceFrom} from '../../util/resource/text/text-resource';
import {TextResourceRange, textResourceRange} from '../../util/resource/text/text-resource-range';
import {Node} from '../node';
import {DeclarationManager, createDeclarationManager} from './declaration-manager';
import {SemanticAnalyzerConfig} from './semantic-analyzer-config';

export interface SemanticAnalyzerContext {
  config: SemanticAnalyzerConfig;
  diagnosticManager: AnalyzerDiagnosticManager;
  declarationManager: DeclarationManager;

  createChildContext: () => SemanticAnalyzerContext;
  createReference: (node: Node) => TextResourceRange;
}

export function semanticContext(
  parent: SemanticAnalyzerContext | Nothing,
  issueManager: AnalyzerDiagnosticManager,
  imports: Array2<DeclarationManager> | Nothing,
  config: SemanticAnalyzerConfig,
): SemanticAnalyzerContext {
  const declarationManager = createDeclarationManager(parent?.declarationManager, imports);

  return {
    config,
    diagnosticManager: issueManager,
    declarationManager,

    createChildContext(): SemanticAnalyzerContext {
      return semanticContext(this, this.resource, this.diagnosticManager, nothing, this.config);
    },

    createReference(node: Node): TextResourceRange {
      const resource = textResourceFrom(this.resource.location, this.resource.data);

      return textResourceRange(resource, node.range);
    },
  };
}
