import {Nothing} from '../../../../lib/types';
import {textPosition} from '../../../util/resource/text/text-position';
import {textRange} from '../../../util/resource/text/text-range';
import {AT} from '../../lexical/lexical-analyzer-config';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../../lexical/node/documentation-label/documentation-label-node';
import {idNode, IdNode} from '../../lexical/node/id/id-node';
import {operatorNode, OperatorNode} from '../../lexical/node/operator/operator-node';
import {$Node} from '../node';
import {SyntaxNode, syntaxNode} from '../node/syntax-node';

export type DocumentationItemNode = SyntaxNode<$Node.DOCUMENTATION_ITEM> & {
  operator: OperatorNode;
  id: IdNode;
  description?: DocumentationDescriptionNode | Nothing;
};

export function documentationItemNode(
  label: DocumentationLabelNode,
  description?: DocumentationDescriptionNode | Nothing,
): DocumentationItemNode {
  const id = idFromLabel(label);
  const operator = operatorFromLabel(label);

  return syntaxNode($Node.DOCUMENTATION_ITEM, {operator, id, description});
}

function operatorFromLabel(label: DocumentationLabelNode): OperatorNode {
  const labelStart = label.range.start;
  const operatorStop = textPosition(
    labelStart.index + AT.length,
    labelStart.line,
    labelStart.column + AT.length,
  );
  const operatorRange = textRange(label.range.start, operatorStop);

  return operatorNode(operatorRange, label.text.slice(0, AT.length));
}

function idFromLabel(label: DocumentationLabelNode): IdNode {
  const labelStart = label.range.start;
  const idStart = textPosition(labelStart.index + AT.length, labelStart.line, labelStart.column + AT.length);
  const idRange = textRange(idStart, label.range.stop);

  return idNode(idRange, label.name);
}
