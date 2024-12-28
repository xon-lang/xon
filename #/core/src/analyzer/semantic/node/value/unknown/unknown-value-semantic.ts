import {
  $ValueSemantic,
  corePackageType,
  Node,
  SemanticAnalyzer,
  UnknownTypeSemantic,
  unknownTypeSemantic,
  ValueSemantic,
} from '#core';

export type UnknownValueSemantic = ValueSemantic & {__branding?: null};

export function unknownValueSemantic(nodeLink: Node, type: UnknownTypeSemantic): UnknownValueSemantic {
  return {
    $: $UnknownValueSemantic,
    nodeLink,
    type,

    equals(other) {
      return this === other;
    },
  };
}

export const $UnknownValueSemantic = corePackageType<UnknownValueSemantic>(
  'UnknownValueSemantic',
  $ValueSemantic,
);

export function unknownValueFromNode(analyzer: SemanticAnalyzer, node: Node): UnknownValueSemantic {
  const type = unknownTypeSemantic(analyzer, node);

  return unknownValueSemantic(node, type);
}
