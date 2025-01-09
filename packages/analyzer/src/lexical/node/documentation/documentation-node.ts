import {
  $SyntaxNode,
  analyzerPackageType,
  DocumentationCloseNode,
  DocumentationDescriptionNode,
  DocumentationLabelNode,
  DocumentationOpenNode,
  rangeFromNodes2,
  SyntaxNode2,
} from '#analyzer';
import {ArrayData, newArrayData, Nothing} from '#common';
import {Brand} from '#typing';

export type DocumentationNode = SyntaxNode2 &
  Brand<'Analyzer.DocumentationNode'> & {
    openNode: DocumentationOpenNode;
    descriptionNode?: DocumentationDescriptionNode | Nothing;
    labels: ArrayData<DocumentationLabelNode>;
    closeNode?: DocumentationCloseNode | Nothing;
  };

export const $DocumentationNode = analyzerPackageType<DocumentationNode>('DocumentationNode', $SyntaxNode);

export function newDocumentationNode(
  openNode: DocumentationOpenNode,
  descriptionNode?: DocumentationDescriptionNode | Nothing,
  labels: ArrayData<DocumentationLabelNode>,
  closeNode?: DocumentationCloseNode | Nothing,
): DocumentationNode {
  const children = newArrayData([openNode, descriptionNode, ...(labels ?? []), closeNode]).filter();
  const range = rangeFromNodes2(children);

  return {
    $: $DocumentationNode,
    range,
    openNode,
    descriptionNode,
    labels,
    closeNode,
    children,
  };
}

// export function validate(analyzer: SyntaxAnalyzer, node: DocumentationNode) {
//   const unnecessaryLabels = newArrayData<Text>();

//   for (const item of node.items) {
//     const name = item.id.text;

//     if (unnecessaryLabels.hasItem(name)) {
//       analyzer.diagnosticManager.addPredefinedDiagnostic(item.reference, (x) =>
//         x.documentationLabelAlreadyExists(name),
//       );

//       continue;
//     }

//     unnecessaryLabels.addLastItem(name);
//   }
// }
