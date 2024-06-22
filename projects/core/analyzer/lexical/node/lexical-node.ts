import {Anything, String2} from '../../../../lib/types';
import {$Node, Node} from '../../syntax/node';

// todo move isHidden property to Node ???
export type HiddenNode = LexicalNode;

export type LexicalNode<T extends $Node = $Node> = Node<T> & {
  text: String2;
};

export function tokenNode<T extends LexicalNode & Record<String2, Anything>>(params: T): T {
  return params;
}
