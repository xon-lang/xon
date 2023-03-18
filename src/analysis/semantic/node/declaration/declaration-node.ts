import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { Node, NodeType } from '~/analysis/node';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: IdNode | null;
  id: IdNode | null;
  parameters: DeclarationNode[];
}

// export function declarationNode(modifierId: PrefixNode | IdNode): DeclarationNode {
//   return {
//     type: NodeType.DECLARATION,
//   };
// }
