import {
  DeclarationNode,
  functionTypeSemantic,
  parametersParse,
  SemanticAnalyzer,
  StructuralTypeDeclarationSemantic,
  typeSemanticParse,
  unknownTypeSemantic,
} from '#/core';

export function structuralTypeDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: StructuralTypeDeclarationSemantic,
  node: DeclarationNode,
): void {
  const resultType = node.assign
    ? typeSemanticParse(analyzer, node.assign.value)
    : unknownTypeSemantic(analyzer, node);

  if (node.generics) {
    const generics = parametersParse(analyzer, node, node.generics);
    semantic.type = functionTypeSemantic(analyzer, node.generics, generics, resultType);

    return;
  }

  semantic.type = resultType;

  if (node.parameters) {
    throw new Error('Not implemented');
  }
}
