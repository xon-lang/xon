import {LexicalNode} from '#/core';
import {$} from '#/typing';

export type OpenNodeType =
  | $.ParenOpenNode
  | $.BracketOpenNode
  | $.BraceOpenNode
  | $.AngleOpenNode
  | $.StringOpenNode
  | $.CharOpenNode;

export type OpenNode<T extends OpenNodeType = OpenNodeType> = LexicalNode<T>;
