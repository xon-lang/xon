import {$} from '../../../../$';
import {String2} from '../../../../../lib/types';
import {TextRange} from '../../../../util/resource/text/text-range';
import {LexicalNode, lexicalNode} from '../lexical-node';

export type CommentLineNode = LexicalNode<$.CommentLineNode>;

export function commentLineNode(range: TextRange, text: String2): CommentLineNode {
  return lexicalNode({$: $.CommentLineNode, range, text, isHidden: true});
}
