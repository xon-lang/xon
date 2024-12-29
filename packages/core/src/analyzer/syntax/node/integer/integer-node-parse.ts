import {IntegerContentNode, IntegerNode, integerNode, SyntaxAnalyzer} from '#core';

export function integerNodeParse(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  return integerNode(analyzer, content);
}
