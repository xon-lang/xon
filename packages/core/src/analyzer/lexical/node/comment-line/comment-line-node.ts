import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextResourceRange} from '../../../../util/resource/text/text-resource-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommentLineNode = LexicalNode<$.CommentLineNode>;

export function commentLineNode(reference: TextResourceRange, text: TextData): CommentLineNode {
  return lexicalNode({$: $.CommentLineNode, reference, text, isHidden: true});
}
