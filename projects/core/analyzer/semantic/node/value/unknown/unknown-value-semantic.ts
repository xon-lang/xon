import {$} from '../../../../../$';
import {Nothing} from '../../../../../../lib/types';
import {ExpressionNode, Node} from '../../../../node';
import {SemanticAnalyzer} from '../../../semantic-analyzer';
import {UnknownTypeSemantic, unknownTypeFromNode} from '../../type/unknown/unknown-type-semantic';
import {ValueSemantic} from '../value-semantic';

export type UnknownValueSemantic = ValueSemantic<$.UnknownValueSemantic> & {};

export function unknownValueSemantic(
  nodeLink: Node | Nothing,
  type: UnknownTypeSemantic,
): UnknownValueSemantic {
  return {
    $: $.UnknownValueSemantic,
    nodeLink,
    type,
  };
}

export function unknownValueFromNode(analyzer: SemanticAnalyzer, node: ExpressionNode): UnknownValueSemantic {
  const type = unknownTypeFromNode(analyzer, node);

  return unknownValueSemantic(node, type);
}
