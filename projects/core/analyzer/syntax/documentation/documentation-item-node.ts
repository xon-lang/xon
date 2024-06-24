import {Nothing} from '../../../../lib/types';
import {textPosition} from '../../../util/resource/text/text-position';
import {textRange} from '../../../util/resource/text/text-range';
import {AT} from '../../lexical/lexical-analyzer-config';
import {DocumentationDescriptionNode} from '../../lexical/node/documentation-description/documentation-description-node';
import {DocumentationLabelNode} from '../../lexical/node/documentation-label/documentation-label-node';
import {idNode, IdNode} from '../../lexical/node/id/id-node';
import {$Node} from '../node';
import {SyntaxNode, syntaxNode} from '../node/syntax-node';

export type DocumentationItemNode = SyntaxNode<$Node.DOCUMENTATION_ITEM> & {
  label: DocumentationLabelNode;
  id: IdNode;
  description?: DocumentationDescriptionNode | Nothing;
};

export function documentationItemNode(
  label: DocumentationLabelNode,
  description?: DocumentationDescriptionNode | Nothing,
): DocumentationItemNode {
  const id = idFromLabel(label);

  return syntaxNode($Node.DOCUMENTATION_ITEM, {label, id, description});
}

function idFromLabel(label: DocumentationLabelNode): IdNode {
  const labelStart = label.range.start;
  const idStart = textPosition(labelStart.index + AT.length, labelStart.line, labelStart.column + AT.length);
  const idRange = textRange(idStart, label.range.stop);

  return idNode(idRange, label.text.slice(1));
}
