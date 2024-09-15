import {
  DeclarationNode,
  functionTypeSemantic,
  parametersParse,
  ParameterValueDeclarationSemantic,
  SemanticAnalyzer,
  typeSemanticParse,
  unknownTypeSemantic,
} from '#core';

export function parameterValueDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: ParameterValueDeclarationSemantic,
  node: DeclarationNode,
): void {
  const valueType = node.assign
    ? typeSemanticParse(analyzer, node.assign.value)
    : unknownTypeSemantic(analyzer, node);

  let type = node.type ? typeSemanticParse(analyzer, node.type.value) : valueType;

  if (node.assign?.value && !valueType.is(type)) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.assign.value.reference, (x) => x.wrongType());
  }

  if (node.parameters) {
    const parameters = parametersParse(analyzer, node, node.parameters);
    type = functionTypeSemantic(analyzer, node.parameters, parameters, type);
  }

  if (node.generics) {
    const generics = parametersParse(analyzer, node, node.generics);
    type = functionTypeSemantic(analyzer, node.generics, generics, type);
  }

  semantic.type = type;
}
