import {Boolean2, String2, Text} from '#common';
import {$Node, corePackageType, Node} from '#core';

export type LexicalNode = Node & {
  text: Text;
};

export const $LexicalNode = corePackageType<LexicalNode>('LexicalNode', $Node);

export function lexicalNode<V extends Pick<LexicalNode, '$' | 'reference' | 'text'>>(
  params: V,
): LexicalNode & V {
  return {
    ...params,

    equals(other: LexicalNode): Boolean2 {
      return this.reference.equals(other.reference);
    },

    toNativeString(): String2 {
      return this.text.toNativeString();
    },
  };
}
