import {Nothing} from '../../../../../lib/types';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {$Node, ExpressionNode} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type TypeNode = SyntaxNode<$Node.TYPE> & {
  semantic: Nothing;
  operator: OperatorNode;
  value: ExpressionNode;
};

export function typeNode(analyzer: SyntaxAnalyzer, operator: OperatorNode, value: ExpressionNode): TypeNode {
  const node = syntaxNode($Node.TYPE, {operator, value});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: TypeNode): void {
  analyzer.formatterManager.formatChildNode(node.value, true);
}
