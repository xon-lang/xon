import {$} from '../../../../../../$';
import {Boolean2, Nothing, String2} from '../../../../../../../lib/types';
import {Node} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {unknownTypeSemantic} from '../../../type/unknown/unknown-type-semantic';
import {DeclarationSemantic} from '../../declaration-semantic';
import {ValueDeclarationSemantic} from '../value-declaration-semantic';

export type ParameterValueDeclarationSemantic = ValueDeclarationSemantic & {
  $: $.ParameterValueDeclarationSemantic;
};

export function parameterValueDeclarationSemantic(
  analyzer: SemanticAnalyzer,
  nodeLink: Node,
  documentation: String2 | Nothing,
  modifier: String2 | Nothing,
  name: String2,
): ParameterValueDeclarationSemantic {
  return {
    $: $.ParameterValueDeclarationSemantic,
    nodeLink,
    usages: [],
    documentation,
    modifier,
    name,
    type: unknownTypeSemantic(analyzer, nodeLink),

    eq(other: DeclarationSemantic): Boolean2 {
      // todo recheck 'eq' conditions
      if (this.nodeLink && other.nodeLink) {
        return this.nodeLink.reference.equals(other.nodeLink.reference);
      }

      return false;
    },
  };
}
