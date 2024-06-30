import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type PostfixNode = SyntaxNode<$Node.POSTFIX> &
  ExpressionNode & {
    value: ExpressionNode;
    operator: OperatorNode;
  };

export function postfixNode(
  analyzer: SyntaxAnalyzer,
  value: ExpressionNode,
  operator: OperatorNode,
): PostfixNode {
  const node = syntaxNode($Node.POSTFIX, {value, operator});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: PostfixNode): void {
  const keepSingleWhitespace = node.operator.text.some((x) => x.isLetter(0));
  analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
}
