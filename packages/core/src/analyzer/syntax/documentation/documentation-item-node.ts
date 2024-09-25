import {Nothing, textData, textPosition, textRange, textResourceRange} from '#common';
import {
  AT,
  DocumentationDescriptionNode,
  DocumentationLabelNode,
  IdNode,
  idNode,
  OperatorNode,
  operatorNode,
  SyntaxAnalyzer,
  SyntaxNode,
  syntaxNode,
} from '#core';
import {$} from '#typing';

export type DocumentationItemNode = SyntaxNode<$.DocumentationItemNode> & {
  operator: OperatorNode;
  id: IdNode;
  description?: DocumentationDescriptionNode | Nothing;
};

export function documentationItemNode(
  analyzer: SyntaxAnalyzer,
  label: DocumentationLabelNode,
  description?: DocumentationDescriptionNode | Nothing,
): DocumentationItemNode {
  const id = idFromLabel(label);
  const operator = operatorFromLabel(label);

  return syntaxNode(analyzer, {$: $.DocumentationItemNode, operator, id, description});
}

function operatorFromLabel(label: DocumentationLabelNode): OperatorNode {
  const labelStart = label.reference.range.start;

  const operatorStop = textPosition(
    labelStart.index + AT.length,
    labelStart.line,
    labelStart.column + AT.length,
  );

  const range = textRange(label.reference.range.start, operatorStop);
  const reference = textResourceRange(label.reference.resource, range);

  return operatorNode(reference, label.text.slice(0, AT.length));
}

function idFromLabel(label: DocumentationLabelNode): IdNode {
  const labelStart = label.reference.range.start;
  const idStart = textPosition(labelStart.index + AT.length, labelStart.line, labelStart.column + AT.length);
  const range = textRange(idStart, label.reference.range.stop);
  const reference = textResourceRange(label.reference.resource, range);
  // todo move to syntax node (make doc label as syntax node)
  const labelName = label.text.slice(AT.length).toString();

  return idNode(reference, textData(labelName));
}
