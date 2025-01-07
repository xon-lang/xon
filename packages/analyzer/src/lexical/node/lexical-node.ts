import {$Node, analyzerPackageType, Node} from '#analyzer';
import {Text} from '#common';

export type LexicalNode = Node & {
  text: Text;
};

export const $LexicalNode = analyzerPackageType<LexicalNode>('LexicalNode', $Node);

export function lexicalNode<V extends Pick<LexicalNode, '$' | 'reference' | 'text'>>(params: V): V {
  return params;
}
