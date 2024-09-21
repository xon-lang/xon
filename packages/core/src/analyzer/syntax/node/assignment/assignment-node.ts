import {IdNode, PrefixNode, SyntaxAnalyzer, SyntaxNode, syntaxNode} from '#core';
import {$} from '#typing';

export type AssignmentNode = SyntaxNode<$.AssignmentNode> & {
  id: IdNode;
  assign: PrefixNode;
};

export function assignmentNode(analyzer: SyntaxAnalyzer, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode(analyzer, {$: $.AssignmentNode, id, assign});

  format(analyzer, node);

  return node;
}

function format(analyzer: SyntaxAnalyzer, node: AssignmentNode): void {
  analyzer.formatterManager.formatChildNode(node.assign, true);
}
