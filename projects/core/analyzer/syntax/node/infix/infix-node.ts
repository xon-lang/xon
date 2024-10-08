import {$} from '../../../../$';
import {RANGE} from '../../../lexical/lexical-analyzer-config';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type InfixNode = SyntaxNode<$.InfixNode> &
  ExpressionNode & {
    left: ExpressionNode;
    operator: OperatorNode;
    right: ExpressionNode;
  };

export function infixNode(
  analyzer: SyntaxAnalyzer,
  left: ExpressionNode,
  operator: OperatorNode,
  right: ExpressionNode,
): InfixNode {
  const node = syntaxNode(analyzer, {$: $.InfixNode, left, operator, right});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: InfixNode): void {
  const keepSingleWhitespace = !node.operator.text.equals(RANGE);
  analyzer.formatterManager.formatChildNode(node.operator, keepSingleWhitespace);
  analyzer.formatterManager.formatChildNode(node.right, keepSingleWhitespace);
}
