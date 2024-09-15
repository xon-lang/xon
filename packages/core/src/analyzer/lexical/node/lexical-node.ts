import {$} from '../../../$';
import {Anything, String2} from '../../../../../lib/src/types';
import {TextData} from '../../../util/data/text-data';
import {Node} from '../../node';

export type LexicalNode<T extends $ = $> = Node<T> & {
  text: TextData;
};

export function lexicalNode<T extends LexicalNode & Record<String2, Anything>>(params: T): T {
  return params;
}
