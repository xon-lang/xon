import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {$Semantic, SemanticNode} from '../semantic-node';

export interface DocumentationIdSemantic extends SemanticNode {
  $: $Semantic.DOCUMENTATION_ID;
  declaration: DeclarationSemantic;
}

export function documentationIdSemantic(
  analyzer: SemanticAnalyzer,
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): DocumentationIdSemantic {
  return {
    $: $Semantic.DOCUMENTATION_ID,
    reference,
    declaration,
  };
}
