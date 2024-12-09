import {Text, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type JoiningNode = LexicalNode;

export const $JoiningNode = corePackageType<JoiningNode>('JoiningNode', $LexicalNode);

export function joiningNode(reference: TextReference, text: Text): JoiningNode {
  return lexicalNode({$: $JoiningNode, reference, text, isHidden: true});
}
