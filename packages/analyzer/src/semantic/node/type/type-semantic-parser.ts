import {
  arrayTypeSemanticTryParse,
  charTypeSemanticTryParse,
  complementTypeSemanticTryParse,
  functionTypeSemanticTryParse,
  idTypeSemanticTryParse,
  integerTypeSemanticTryParse,
  intersectionTypeSemanticTryParse,
  invokeTypeSemanticTryParse,
  newUnknownTypeSemantic,
  Node,
  notTypeSemanticTryParse,
  rangeTypeSemanticTryParse,
  SemanticAnalyzer,
  stringTypeSemanticTryParse,
  TypeNode,
  TypeSemantic,
  unionTypeSemanticTryParse,
} from '#analyzer';
import {ArrayData, newArrayData, Nothing} from '#common';

type TypeSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => TypeSemantic | Nothing;

export function typeSemanticParse(analyzer: SemanticAnalyzer, node: Node): TypeSemantic {
  const semantic =
    parsers().firstMap((parse) => parse(analyzer, node)) ?? newUnknownTypeSemantic(analyzer, node);
  node.semantic = semantic;

  return semantic;
}

// todo move or remove 'typeNodeType'
export function typeNodeType(analyzer: SemanticAnalyzer, node: TypeNode): TypeSemantic {
  if (node.value) {
    return typeSemanticParse(analyzer, node.value);
  }

  return newUnknownTypeSemantic(analyzer, node);
}

function parsers(): ArrayData<TypeSemanticTryParseFn> {
  return newArrayData([
    integerTypeSemanticTryParse,
    charTypeSemanticTryParse,
    stringTypeSemanticTryParse,
    rangeTypeSemanticTryParse,
    arrayTypeSemanticTryParse,
    idTypeSemanticTryParse,
    functionTypeSemanticTryParse,
    invokeTypeSemanticTryParse,
    intersectionTypeSemanticTryParse,
    unionTypeSemanticTryParse,
    complementTypeSemanticTryParse,
    notTypeSemanticTryParse,
  ]);
}
