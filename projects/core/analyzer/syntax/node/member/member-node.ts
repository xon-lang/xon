import {$} from '../../../../$';
import {Nothing} from '../../../../../lib/types';
import {IdNode} from '../../../lexical/node/id/id-node';
import {OperatorNode} from '../../../lexical/node/operator/operator-node';
import {ExpressionNode, Node} from '../../../node';
import {SyntaxAnalyzer} from '../../syntax-analyzer';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type MemberNode = SyntaxNode<$.MemberNode> &
  ExpressionNode & {
    instance: ExpressionNode;
    operator: OperatorNode;
    id: IdNode | Nothing;
  };

export function memberNode(
  analyzer: SyntaxAnalyzer,
  instance: Node,
  operator: OperatorNode,
  id: IdNode | Nothing,
): MemberNode {
  const node = syntaxNode($.MemberNode, {instance, operator, id});

  validate(analyzer, node);
  format(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: MemberNode): void {
  if (!node.id) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.operator.range, (x) => x.shouldBeMemberName());
  }
}

function format(analyzer: SyntaxAnalyzer, node: MemberNode): void {
  analyzer.formatterManager.formatChildNode(node.operator, false);

  if (node.id) {
    analyzer.formatterManager.formatChildNode(node.id, false);
  }
}
