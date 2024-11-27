import {Nothing} from '#common';
import {AssignNode, ExpressionNode, GroupNode, SyntaxAnalyzer, SyntaxNode, syntaxNode, TypeNode} from '#core';
import {$} from '#typing';

export type LambdaNode = SyntaxNode<$.LambdaNode> &
  ExpressionNode & {
    generics: GroupNode | Nothing;
    parameters: GroupNode;
    type: TypeNode | Nothing;
    assign: AssignNode | Nothing;
  };

export function lambdaNode(
  analyzer: SyntaxAnalyzer,
  generics: GroupNode | Nothing,
  parameters: GroupNode,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): LambdaNode {
  const node = syntaxNode(analyzer, {$: $.LambdaNode, generics, parameters, type, assign});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: LambdaNode): void {
  if (node.type) {
    analyzer.formatterManager.formatChildNode(node.type, false);
  }

  if (node.assign) {
    analyzer.formatterManager.formatChildNode(node.assign, true);
  }
}
