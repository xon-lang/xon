import {nothing} from '#/common';
import {
  DeclarationNode,
  ParameterTypeDeclarationSemantic,
  SemanticAnalyzer,
  typeSemanticParse,
  unknownTypeSemantic,
} from '#/core';

export function parameterTypeDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: ParameterTypeDeclarationSemantic,
  node: DeclarationNode,
): void {
  semantic.value = node.assign ? typeSemanticParse(analyzer, node.assign.value) : nothing;

  semantic.type = node.type
    ? typeSemanticParse(analyzer, node.type.value)
    : semantic.value ?? unknownTypeSemantic(analyzer, node);

  if (node.generics || node.parameters) {
    throw new Error('Not implemented');
  }
}
