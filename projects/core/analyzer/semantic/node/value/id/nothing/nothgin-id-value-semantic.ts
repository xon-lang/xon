import {$} from '../../../../../../$';
import {TextResourceRange} from '../../../../../../util/resource/text/text-resource-range';
import {ExpressionNode} from '../../../../../node';
import {SemanticAnalyzer} from '../../../../semantic-analyzer';
import {NothingIdTypeSemantic, nothingTypeFromNode} from '../../../type/id/nothing/nothing-id-type-semantic';
import {ValueSemantic} from '../../value-semantic';

export type NothingIdValueSemantic = ValueSemantic<$.NothingIdValueSemantic> & {};

export function nothingValueSemantic(
  reference: TextResourceRange,
  type: NothingIdTypeSemantic,
): NothingIdValueSemantic {
  return {
    $: $.NothingIdValueSemantic,
    reference,
    type,
  };
}

export function nothingValueFromNode(
  analyzer: SemanticAnalyzer,
  node: ExpressionNode,
): NothingIdValueSemantic {
  const type = nothingTypeFromNode(analyzer, node);

  return nothingValueSemantic(analyzer.createReference(node), type);
}
