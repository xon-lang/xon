import {IntegerContentNode} from '../../../lexical/node/integer-content/integer-content-node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {IntegerNode, integerNode} from './integer-node';

export function integerNodeParse(analyzer: SyntaxAnalyzer, content: IntegerContentNode): IntegerNode {
  return integerNode(analyzer, content);
}
