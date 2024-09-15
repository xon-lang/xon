import {Nothing} from '#common';
import {
  ExpressionNode,
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

export const parsers: ValueSemanticTryParseFn[] = [
  integerValueSemanticTryParse,
  charValueSemanticTryParse,
  stringValueSemanticTryParse,
  idValueSemanticTryParse,
  memberValueSemanticTryParse,
  invokeValueSemanticTryParse,
];

export function valueSemanticParse(analyzer: SemanticAnalyzer, node: ExpressionNode): ValueSemantic {
  const semantic = parsers.findMap((parse) => parse(analyzer, node)) ?? unknownValueFromNode(analyzer, node);
  node.semantic = semantic;

  return semantic;
}
