import {$CharNode, CharNode, CharTypeSemantic, charTypeSemantic, Node, SemanticAnalyzer} from '#analyzer';
import {Nothing, nothing} from '#common';
import {is} from '#typing';

export function charTypeSemanticTryParse(analyzer: SemanticAnalyzer, node: Node): CharTypeSemantic | Nothing {
  if (!is(node, $CharNode)) {
    return nothing;
  }

  return charTypeSemanticParse(analyzer, node);
}

export function charTypeSemanticParse(analyzer: SemanticAnalyzer, node: CharNode): CharTypeSemantic {
  return charTypeSemantic(analyzer, node, node.value);
}
