import {
  $SyntaxNode,
  AT,
  corePackageType,
  DocumentationDescriptionNode,
  DocumentationLabelNode,
  IdNode,
  idNode,
  OperatorNode,
  operatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#analyzer';
import {newText, newTextPosition, newTextReference, Nothing, textRange} from '#common';

export type DocumentationItemNode = SyntaxNode & {
  operator: OperatorNode;
  id: IdNode;
  description?: DocumentationDescriptionNode | Nothing;
};

export const $DocumentationItemNode = corePackageType<DocumentationItemNode>(
  'DocumentationItemNode',
  $SyntaxNode,
);

export function documentationItemNode(
  analyzer: SyntaxAnalyzer,
  label: DocumentationLabelNode,
  description?: DocumentationDescriptionNode | Nothing,
): DocumentationItemNode {
  const id = idFromLabel(label);
  const operator = operatorFromLabel(label);

  return syntaxNode(analyzer, {$: $DocumentationItemNode, operator, id, description});
}

function operatorFromLabel(label: DocumentationLabelNode): OperatorNode {
  const labelStart = label.reference.range.start;

  const operatorStop = newTextPosition(
    labelStart.index + AT.count(),
    labelStart.line,
    labelStart.column + AT.count(),
  );

  const range = textRange(label.reference.range.start, operatorStop);
  const reference = newTextReference(label.reference.resource, range);

  return operatorNode(reference, label.text.slice(0, AT.count()));
}

function idFromLabel(label: DocumentationLabelNode): IdNode {
  const labelStart = label.reference.range.start;
  const idStart = newTextPosition(
    labelStart.index + AT.count(),
    labelStart.line,
    labelStart.column + AT.count(),
  );
  const range = textRange(idStart, label.reference.range.stop);
  const reference = newTextReference(label.reference.resource, range);

  return idNode(reference, newText(label.name));
}
