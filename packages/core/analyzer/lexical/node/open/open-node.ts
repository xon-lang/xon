import {$} from '../../../../$';
import {LexicalNode} from '../lexical-node';

export type OpenNodeType =
  | $.ParenOpenNode
  | $.BracketOpenNode
  | $.BraceOpenNode
  | $.AngleOpenNode
  | $.StringOpenNode
  | $.CharOpenNode;

export type OpenNode<T extends $ = OpenNodeType> = LexicalNode<T>;
