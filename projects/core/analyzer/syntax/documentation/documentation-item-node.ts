import {$} from '../../../$';
import {Nothing} from '../../../../lib/types';
import {textData} from '../../../util/data/text-data';
import {textPosition} from '../../../util/resource/text/text-position';
import {textRange} from '../../../util/resource/text/text-range';
import {textResourceRange} from '../../../util/resource/text/text-resource-range';
import {AT} from '../../lexical/lexical-analyzer-config';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../../lexical/node/documentation-label/documentation-label-node';
import {idNode, IdNode} from '../../lexical/node/id/id-node';
import {operatorNode, OperatorNode} from '../../lexical/node/operator/operator-node';
import {SyntaxNode, syntaxNode} from '../node/syntax-node';
import {SyntaxAnalyzer} from '../syntax-analyzer';

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

  return idNode(reference, textData(label.name));
}
