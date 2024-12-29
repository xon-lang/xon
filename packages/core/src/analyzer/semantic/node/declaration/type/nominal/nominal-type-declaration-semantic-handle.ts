import {
  $AttributeValueDeclarationSemantic,
  DeclarationNode,
  functionTypeSemantic,
  idTypeSemantic,
  NominalTypeDeclarationSemantic,
  parametersParse,
  SemanticAnalyzer,
  statementDeclarationsParse,
  typeSemanticParse,
} from '#core';
import {is} from '#typing';

export function nominalTypeDeclarationSemanticHandle(
  analyzer: SemanticAnalyzer,
  semantic: NominalTypeDeclarationSemantic,
  node: DeclarationNode,
): void {
  // todo use 'unknownType' type instead of 'nothing' ???
  // todo use 'Something' type instead of 'nothing' ???
  if (node.type) {
    semantic.baseType = typeSemanticParse(analyzer, node.type.value);
    for (const attribute of semantic.baseType.attributes().all()) {
      semantic.attributes.add(attribute);
    }
  }

  const resultType = idTypeSemantic(analyzer, node.id, node.id.text.toString(), semantic);

  if (node.generics) {
    const generics = parametersParse(analyzer, node, node.generics);
    semantic.type = functionTypeSemantic(analyzer, node.generics, generics, resultType);

    return;
  }

  semantic.type = resultType;

  if (node.attributes) {
    const attributes = statementDeclarationsParse(analyzer, node.attributes).filter((x) =>
      is(x, $AttributeValueDeclarationSemantic),
    );

    for (const attribute of attributes) {
      semantic.attributes.add(attribute);
    }
  }

  if (node.parameters) {
    throw new Error('Not implemented');
  }
}
