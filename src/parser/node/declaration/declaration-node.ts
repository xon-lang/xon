import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '../node-type';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  id: IdNode | null;
  type: Node | null;
  value: Node | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  id: IdNode | null,
  type: Node | null,
  value: Node | null,
): DeclarationNode {
  const leftNode = modifier ?? id ?? type ?? value;
  const rightNode = value ?? type ?? id ?? modifier;

  return {
    $: NodeType.DECLARATION,
    start: leftNode?.start ?? 0,
    stop: rightNode?.stop ?? 0,
    hidden: [],
    modifier,
    id,
    type,
    value,
  };
}
