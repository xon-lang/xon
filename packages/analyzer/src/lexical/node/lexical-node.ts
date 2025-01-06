import {$Node, analyzerPackageType, Node} from '#analyzer';
import {Boolean2, Text} from '#common';

export type LexicalNode = Node & {
  text: Text;
};

export const $LexicalNode = analyzerPackageType<LexicalNode>('LexicalNode', $Node);

export function lexicalNode<V extends Pick<LexicalNode, '$' | 'reference' | 'text'>>(
  params: V,
): LexicalNode & V {
  return {
    ...params,

    equals(other: LexicalNode): Boolean2 {
      return this.reference.equals(other.reference);
    },
  };
}
