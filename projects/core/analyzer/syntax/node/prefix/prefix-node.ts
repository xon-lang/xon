import {ASSIGN, TYPE} from '../../../lexical/lexical-analyzer-config';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type PrefixNode = SyntaxNode<$Node.PREFIX> &
  ExpressionNode & {
    operator: OperatorNode;
    value: ExpressionNode;
  };

export function prefixNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: ExpressionNode,
): PrefixNode {
  const node = syntaxNode($Node.PREFIX, {operator, value});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: PrefixNode): void {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter(0) || x === TYPE || x === ASSIGN);
  analyzer.formatterManager.formatChildNode(node.value, keepSingleWhitespace);
}
