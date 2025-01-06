import {IntegerContentNode, IntegerNode, integerNode, SyntaxAnalyzer} from '#analyzer';

export function integerNodeParse(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  return integerNode(analyzer, content);
}
