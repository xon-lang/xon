import {$} from '../../../../$';
import {TextData} from '../../../../util/data/text-data';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommentLineNode = LexicalNode<$.CommentLineNode>;

export function commentLineNode(range: TextRange, text: TextData): CommentLineNode {
  return lexicalNode({$: $.CommentLineNode, range, text, isHidden: true});
}
