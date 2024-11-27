import {ReturnNode, SemanticAnalyzer, valueSemanticParse} from '#/core';

export function returnStatementSemanticParse(analyzer: SemanticAnalyzer, node: ReturnNode): void {
  if (node.value) {
    node.value.semantic = valueSemanticParse(analyzer, node.value);
  }
}
