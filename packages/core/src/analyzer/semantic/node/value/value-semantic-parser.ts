import {newArrayData, Nothing} from '#common';
import {
  Node,
  SemanticAnalyzer,
  ValueSemantic,
  charValueSemanticTryParse,
  idValueSemanticTryParse,
  integerValueSemanticTryParse,
  invokeValueSemanticTryParse,
  memberValueSemanticTryParse,
  stringValueSemanticTryParse,
  unknownValueFromNode,
} from '#core';

type ValueSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => ValueSemantic | Nothing;

export function valueSemanticParse(analyzer: SemanticAnalyzer, node: Node): ValueSemantic {
  const semantic =
  newArrayData(parsers()).findMap((parse) => parse(analyzer, node)) ?? unknownValueFromNode(analyzer, node);
  node.semantic = semantic;

  return semantic;
}

function parsers(): ValueSemanticTryParseFn[] {
  return [
    integerValueSemanticTryParse,
    charValueSemanticTryParse,
    stringValueSemanticTryParse,
    idValueSemanticTryParse,
    memberValueSemanticTryParse,
    invokeValueSemanticTryParse,
  ];
}
