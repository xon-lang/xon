import { declarationNode } from '~/parser/node/declaration/declaration-node';
import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '~/parser/node/node-type';
import { is } from '~/parser/util/is';

export function collapseDeclaration(nodes: Node[]): void {
  const firstNode = nodes[0];

  if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    const secondNode = nodes[1];

    if (is<IdNode>(secondNode, NodeType.ID)) {
      nodes[0] = declarationNode(firstNode, secondNode, null, null);
      nodes.splice(1, 1);
    }
  }
}
