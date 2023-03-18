import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { Node, NodeType } from '~/analysis/node';
import { PrefixNode } from '~/analysis/syntax/node/prefix/prefix-node';

export interface DeclarationNode extends Node {
  type: NodeType.DECLARATION;
  modifier: IdNode | null
  id: IdNode | null
  parameters: DeclarationNode[]
}

// export function declarationNode(modifierId: PrefixNode | IdNode): DeclarationNode {
//   return {
//     type: NodeType.DECLARATION,
//   };
// }
