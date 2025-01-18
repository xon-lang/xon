import {
  $CharacterNode,
  CharacterNode,
  CharTypeSemantic,
  charTypeSemantic,
  Node,
  SemanticAnalyzer,
} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function charTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): CharTypeSemantic | Nothing {
  if (!is(node, $CharacterNode)) {
    return nothing;
  }

  return charTypeSemanticParse(analyzer, node);
}

export function charTypeSemanticParse(analyzer: SemanticAnalyzer, node: CharacterNode): CharTypeSemantic {
  return charTypeSemantic(analyzer, node, node.value);
}
