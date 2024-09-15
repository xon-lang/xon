import {$, LexicalNode} from '#core';

export type OpenNodeType =
  | $.ParenOpenNode
  | $.BracketOpenNode
  | $.BraceOpenNode
  | $.AngleOpenNode
  | $.StringOpenNode
  | $.CharOpenNode;

export type OpenNode<T extends $ = OpenNodeType> = LexicalNode<T>;
