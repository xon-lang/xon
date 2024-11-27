import {Nothing} from '#/common';
import {ExpressionNode, IdNode, Node, OperatorNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#/core';
import {$} from '#/typing';

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
  const node = syntaxNode(analyzer, {$: $.MemberNode, instance, operator, id});

  validate(analyzer, node);
  format(analyzer, node);

  return node;
}

function validate(analyzer: SyntaxAnalyzer, node: MemberNode): void {
  if (!node.id) {
    analyzer.diagnosticManager.addPredefinedDiagnostic(node.operator.reference, (x) =>
      x.shouldBeMemberName(),
    );
  }
}

function format(analyzer: SyntaxAnalyzer, node: MemberNode): void {
  analyzer.formatterManager.formatChildNode(node.operator, false);

  if (node.id) {
    analyzer.formatterManager.formatChildNode(node.id, false);
  }
}
