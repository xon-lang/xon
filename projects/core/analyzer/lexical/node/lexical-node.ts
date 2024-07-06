import {$} from '../../../$';
import {Anything, String2} from '../../../../lib/types';
import {Node} from '../../node';

export type LexicalNode<T extends $ = $> = Node<T> & {
  text: String2;
};

export function lexicalNode<T extends LexicalNode & Record<String2, Anything>>(params: T): T {
  return params;
}
