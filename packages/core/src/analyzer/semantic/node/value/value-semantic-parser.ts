import {ArrayData, newArrayData, Nothing} from '#common';
import {
  charValueSemanticTryParse,
  idValueSemanticTryParse,
  integerValueSemanticTryParse,
  invokeValueSemanticTryParse,
  memberValueSemanticTryParse,
  Node,
  SemanticAnalyzer,
  stringValueSemanticTryParse,
  unknownValueFromNode,
  ValueSemantic,
} from '#core';

type ValueSemanticTryParseFn = (analyzer: SemanticAnalyzer, node: Node) => ValueSemantic | Nothing;

export function valueSemanticParse(analyzer: SemanticAnalyzer, node: Node): ValueSemantic {
  const semantic =
    parsers().findMap((parse) => parse(analyzer, node)) ?? unknownValueFromNode(analyzer, node);
  node.semantic = semantic;

  return semantic;
}

function parsers(): ArrayData<ValueSemanticTryParseFn> {
  return newArrayData([
    integerValueSemanticTryParse,
    charValueSemanticTryParse,
    stringValueSemanticTryParse,
    idValueSemanticTryParse,
    memberValueSemanticTryParse,
    invokeValueSemanticTryParse,
  ]);
}
