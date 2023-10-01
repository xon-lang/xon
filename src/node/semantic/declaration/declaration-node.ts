import { SemanticNode } from '~/analysis/semantic/semantic-node';
import { IdNode } from '~/node/lexical/id/id-node';
import { ModifierNode } from '~/node/lexical/modifier/modifier-node';
import { Node, NodeType } from '~/node/node';

export interface DeclarationNode extends SemanticNode {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | null;
  group: GroupSemantic | null;
  type: Node | null;
  value: Node | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  name: IdNode | null,
  group: GroupSemantic | null,
  type: Node | null,
  value: Node | null,
): DeclarationNode {
  const leftNode = modifier ?? name ?? group ?? type ?? value;
  const rightNode = value ?? type ?? group ?? name ?? modifier;

  return {
    $: NodeType.DECLARATION,
    start: leftNode?.start ?? 0,
    stop: rightNode?.stop ?? 0,
    modifier,
    name,
    group,
    type,
    value,
  };
}

export interface GroupSemantic extends SemanticNode {}

// model? A? {T: Number, T2}(p1: P, p2: P)?: R
