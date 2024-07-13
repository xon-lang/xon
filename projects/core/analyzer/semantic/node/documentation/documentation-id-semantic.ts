import {$} from '../../../../$';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {Semantic} from '../semantic';

export interface DocumentationIdSemantic extends Semantic {
  $: $.DocumentationIdSemantic;
  declaration: DeclarationSemantic;
}

export function documentationIdSemantic(
  analyzer: SemanticAnalyzer,
  reference: TextResourceRange,
  declaration: DeclarationSemantic,
): DocumentationIdSemantic {
  return {
    $: $.DocumentationIdSemantic,
    reference,
    declaration,
  };
}
