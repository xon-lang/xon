import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {AT} from '../../lexical-analyzer-config';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type DocumentationLabelNode = LexicalNode<$.DocumentationLabelNode> & {
  name: String2;
};

export function documentationLabelNode(reference: TextResourceRange, text: TextData): DocumentationLabelNode {
  const name = text.slice(AT.length).toString();

  return lexicalNode({$: $.DocumentationLabelNode, reference, text, name});
}
