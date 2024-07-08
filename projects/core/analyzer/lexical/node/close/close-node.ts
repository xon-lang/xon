import {$} from '../../../../$';
import {LexicalNode} from '../lexical-node';

export type CloseNodeType = $.ParenCloseNode | $.BracketCloseNode | $.BraceCloseNode;
export type CloseNode<T extends $ = CloseNodeType> = LexicalNode<T>;
