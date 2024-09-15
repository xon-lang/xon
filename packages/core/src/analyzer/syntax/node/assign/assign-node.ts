import {$} from '../../../../$';
import {nothing, Nothing} from '../../../../../../lib/types';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type AssignNode = SyntaxNode<$.AssignNode> & {
  semantic: Nothing;
  operator: OperatorNode;
  value: ExpressionNode;
};

export function assignNode(
  analyzer: SyntaxAnalyzer,
  operator: OperatorNode,
  value: ExpressionNode,
): AssignNode {
  const node = syntaxNode(analyzer, {$: $.AssignNode, operator, value, semantic: nothing});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignNode): void {
  analyzer.formatterManager.formatChildNode(node.value, true);
}
