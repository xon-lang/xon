import {ArrayData, Nothing, String2} from '#common';
import {
  $SyntaxNode,
  corePackageType,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationItemNode,
  DocumentationOpenNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';

export type DocumentationNode = SyntaxNode & {
  open: DocumentationOpenNode;
  description?: DocumentationDescriptionNode | Nothing;
  items: ArrayData<DocumentationItemNode>;
  close?: DocumentationCloseNode | Nothing;
};

export const $DocumentationNode = corePackageType<DocumentationNode>('DocumentationNode', $SyntaxNode);

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
  const unnecessaryLabels: String2[] = [];

  for (const item of node.items) {
    const name = item.id.text.toNativeString();

    if (unnecessaryLabels.includes(name)) {
      analyzer.diagnosticManager.addPredefinedDiagnostic(item.reference, (x) =>
        x.documentationLabelAlreadyExists(name),
      );

      continue;
    }

    unnecessaryLabels.push(name);
  }
}
