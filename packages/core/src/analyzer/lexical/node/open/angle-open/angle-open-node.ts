import {TextData, TextReference} from '#common';
import {OpenNode, lexicalNode} from '#core';
import {$} from '#typing';

export type AngleOpenNode = OpenNode<$.AngleOpenNode>;

export function angleOpenNode(reference: TextReference, text: TextData): AngleOpenNode {
  return lexicalNode($.AngleOpenNode, {reference, text});
}
