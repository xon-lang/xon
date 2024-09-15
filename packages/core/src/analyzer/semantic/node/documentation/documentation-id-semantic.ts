import {$} from '../../../../$';
import {Node} from '../../../node';
import {SemanticAnalyzer} from '../../semantic-analyzer';
import {DeclarationSemantic} from '../declaration/declaration-semantic';
import {Semantic} from '../semantic';

export interface DocumentationIdSemantic extends Semantic {
  $: $.DocumentationIdSemantic;
  declaration: DeclarationSemantic;
}

export function documentationIdSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  declaration: DeclarationSemantic,
): DocumentationIdSemantic {
  return {
    $: $.DocumentationIdSemantic,
    nodeLink,
    declaration,
  };
}
