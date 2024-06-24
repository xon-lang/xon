import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SemanticAnalyzerContext} from '../../semantic-analyzer-context';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {$Semantic, SemanticNode} from '../semantic-node';

export interface DocumentationIdSemantic extends SemanticNode {
  $: $Semantic.DOCUMENTATION_ID;
  declaration: DeclarationSemantic;
}

export function documentationIdSemantic(
  context: SemanticAnalyzerContext,
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): DocumentationIdSemantic {
  declaration.usages.push(reference);

  return {
    $: $Semantic.DOCUMENTATION_ID,
    reference,
    declaration,
  };
}
