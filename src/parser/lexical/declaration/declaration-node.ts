import { SemanticNode } from '~/node/semantic/semantic-node';
import { IdNode } from '~/parser/lexical/id/id-node';
import { ModifierNode } from '~/parser/lexical/modifier/modifier-node';
import { Node, NodeType } from '~/parser/lexical/node';

export interface DeclarationNode extends SemanticNode {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | null;
  group: GroupSemantic[];
  type: Node | null;
  value: Node | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  name: IdNode | null,
  group: GroupSemantic[],
  type: Node | null,
  value: Node | null,
): DeclarationNode {
  return {
    $: NodeType.DECLARATION,
    modifier,
    name,
    group,
    type,
    value,
  };
}

export interface GroupSemantic extends SemanticNode {}

// model? A? {T: Number, T2}(p1: P, p2: P)?: R
