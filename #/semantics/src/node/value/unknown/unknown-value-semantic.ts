import {
  ExpressionNode,
  Node,
  SemanticAnalyzer,
  UnknownTypeSemantic,
  unknownTypeSemantic,
  ValueSemantic,
} from '#semantics';
import {$} from '#typing';

export type UnknownValueSemantic = ValueSemantic<$.UnknownValueSemantic> & {};

export function unknownValueSemantic(nodeLink: Node, type: UnknownTypeSemantic): UnknownValueSemantic {
  return {
    $: $.UnknownValueSemantic,
    nodeLink,
    type,
  };
}

export function unknownValueFromNode(analyzer: SemanticAnalyzer, node: ExpressionNode): UnknownValueSemantic {
  const type = unknownTypeSemantic(analyzer, node);

  return unknownValueSemantic(node, type);
}
