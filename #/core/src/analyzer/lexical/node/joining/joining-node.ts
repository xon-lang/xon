import {TextData, TextReference} from '#common';
import {$LexicalNode, corePackageType, LexicalNode, lexicalNode} from '#core';

export type JoiningNode = LexicalNode;

export const $JoiningNode = corePackageType<JoiningNode>('JoiningNode', $LexicalNode);

export function joiningNode(reference: TextReference, text: TextData): JoiningNode {
  return lexicalNode({$: $JoiningNode, reference, text, isHidden: true});
}
