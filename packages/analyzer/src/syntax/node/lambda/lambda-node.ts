import {
  $SyntaxNode,
  analyzerPackageType,
  AssignNode,
  GroupNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
  TypeNode,
} from '#analyzer';
import {Nothing} from '#common';

export type LambdaNode = SyntaxNode & {
  generics: GroupNode | Nothing;
  parameters: GroupNode;
  type: TypeNode | Nothing;
  assign: AssignNode | Nothing;
};

export const $LambdaNode = analyzerPackageType<LambdaNode>('LambdaNode', $SyntaxNode);

export function lambdaNode(
  analyzer: SyntaxAnalyzer,
  generics: GroupNode | Nothing,
  parameters: GroupNode,
  type: TypeNode | Nothing,
  assign: AssignNode | Nothing,
): LambdaNode {
  const node = syntaxNode(analyzer, {$: $LambdaNode, generics, parameters, type, assign, isExpression: true});

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
