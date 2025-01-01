import {newArrayData, Nothing} from '#common';
import {
  arrayTypeSemanticTryParse,
  charTypeSemanticTryParse,
  complementTypeSemanticTryParse,
  functionTypeSemanticTryParse,
  idTypeSemanticTryParse,
  integerTypeSemanticTryParse,
  intersectionTypeSemanticTryParse,
  invokeTypeSemanticTryParse,
  Node,
  notTypeSemanticTryParse,
  rangeTypeSemanticTryParse,
  SemanticAnalyzer,
  stringTypeSemanticTryParse,
  TypeNode,
  TypeSemantic,
  unionTypeSemanticTryParse,
  unknownTypeSemantic,
} from '#core';

type TypeSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => TypeSemantic | Nothing;

export function typeSemanticParse(analyzer: SemanticAnalyzer, node: Node): TypeSemantic {
  const semantic =
    newArrayData(parsers()).findMap((parse) => parse(analyzer, node)) ?? unknownTypeSemantic(analyzer, node);
  node.semantic = semantic;

  return semantic;
}

// todo move or remove 'typeNodeType'
export function typeNodeType(analyzer: SemanticAnalyzer, node: TypeNode): TypeSemantic {
  if (node.value) {
    return typeSemanticParse(analyzer, node.value);
  }

  return unknownTypeSemantic(analyzer, node);
}

function parsers(): TypeSemanticTryParseFn[] {
  return [
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
  ];
}
