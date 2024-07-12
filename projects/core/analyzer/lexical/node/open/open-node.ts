import {$} from '../../../../$';
import {LexicalNode} from '../lexical-node';

export type OpenNodeType =
  | $.ParenOpenNode
  | $.BracketOpenNode
  | $.BraceOpenNode
  | $.StringOpenNode
  | $.CharOpenNode;

export type OpenNode<T extends $ = OpenNodeType> = LexicalNode<T>;
