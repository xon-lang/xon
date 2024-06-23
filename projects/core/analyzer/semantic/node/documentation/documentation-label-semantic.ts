import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SemanticAnalyzerContext} from '../../semantic-analyzer-context';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {$Semantic, SemanticNode} from '../semantic-node';

export interface DocumentationLabelSemantic extends SemanticNode {
  $: $Semantic.DOCUMENTATION_LABEL;
  declaration: DeclarationSemantic;
}

export function documentationLabelSemantic(
  context: SemanticAnalyzerContext,
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): DocumentationLabelSemantic {
  declaration.usages.push(reference);

  return {
    $: $Semantic.DOCUMENTATION_LABEL,
    reference,
    declaration,
  };
}
