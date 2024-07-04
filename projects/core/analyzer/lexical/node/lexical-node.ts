import {$} from '../../../$';
import {Anything, String2} from '../../../../lib/types';
import {Node} from '../../node';

// todo move isHidden property to Node ???
// or remove entirely HiddenNode type
export interface HiddenNode {}

export type LexicalNode<T extends $ = $> = Node<T> & {
  text: String2;
};

export function lexicalNode<T extends LexicalNode & Record<String2, Anything>>(params: T): T {
  return params;
}
