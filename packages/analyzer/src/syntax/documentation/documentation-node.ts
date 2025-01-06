import {
  $SyntaxNode,
  analyzerPackageType,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationItemNode,
  DocumentationOpenNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';
import {ArrayData, newArrayData, Nothing, Text} from '#common';

export type DocumentationNode = SyntaxNode & {
  open: DocumentationOpenNode;
  description?: DocumentationDescriptionNode | Nothing;
  items: ArrayData<DocumentationItemNode>;
  close?: DocumentationCloseNode | Nothing;
};

export const $DocumentationNode = analyzerPackageType<DocumentationNode>('DocumentationNode', $SyntaxNode);

export function documentationNode(
  analyzer: SyntaxAnalyzer,
  open: DocumentationOpenNode,
  description: DocumentationDescriptionNode | Nothing,
  items: ArrayData<DocumentationItemNode>,
  close?: DocumentationCloseNode | Nothing,
): DocumentationNode {
  const node = syntaxNode(analyzer, {
    $: $DocumentationNode,
    isHidden: true,
    open,
    description,
    items,
    close,
  });

  validate(analyzer, node);

  return node;
}

export function validate(analyzer: SyntaxAnalyzer, node: DocumentationNode) {
  const unnecessaryLabels = newArrayData<Text>();

  for (const item of node.items) {
    const name = item.id.text;

    if (unnecessaryLabels.hasItem(name)) {
      analyzer.diagnosticManager.addPredefinedDiagnostic(item.reference, (x) =>
        x.documentationLabelAlreadyExists(name),
      );

      continue;
    }

    unnecessaryLabels.addLastItem(name);
  }
}
