import {LexicalNode} from '#core';
import {$} from '#typing';

export type CloseNodeType =
  | $.ParenCloseNode
  | $.BracketCloseNode
  | $.BraceCloseNode
  | $.AngleCloseNode
  | $.StringCloseNode
  | $.CharCloseNode;

export type CloseNode<T extends $ = CloseNodeType> = LexicalNode<T>;
