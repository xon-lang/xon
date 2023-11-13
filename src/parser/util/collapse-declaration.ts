import { IdNode } from '~/parser/node/id/id-node';
import { modelNode } from '~/parser/node/model/model-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { NodeType } from '~/parser/node/node-type';
import { StatementNode } from '~/parser/node/statement/statement-node';
import { is } from '~/parser/util/is';

export function collapseDeclaration({ nodes, parent }: StatementNode): void {
  const firstNode = nodes[0];

  if (is<ModifierNode>(firstNode, NodeType.MODIFIER)) {
    const secondNode = nodes[1];

    if (is<IdNode>(secondNode, NodeType.ID)) {
      nodes[0] = modelNode(firstNode, secondNode, null, null);
      nodes.splice(1, 1);
    }
  }
}
