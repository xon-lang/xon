import {$} from '../../../../../$';
import {TextResourceRange} from '../../../../../util/resource/text/text-resource-range';
import {ExpressionNode} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {UnknownTypeSemantic, unknownTypeFromNode} from '../../type/unknown/unknown-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type UnknownValueSemantic = ValueSemantic<$.UnknownValueSemantic> & {};

export function unknownValueSemantic(
  reference: TextResourceRange,
  type: UnknownTypeSemantic,
): UnknownValueSemantic {
  return {
    $: $.UnknownValueSemantic,
    reference,
    type,
  };
}

export function unknownFromNode(analyzer: SemanticAnalyzer, node: ExpressionNode): UnknownValueSemantic {
  const type = unknownTypeFromNode(analyzer, node);

  return unknownValueSemantic(analyzer.reference(node), type);
}
