import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { NodeType } from '../node-type';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | null;
  type: Node | null;
  value: Node | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  name: IdNode | null,
  type: Node | null,
  value: Node | null,
): DeclarationNode {
  const leftNode = modifier ?? name ?? type ?? value;
  const rightNode = value ?? type ?? name ?? modifier;

  return {
    $: NodeType.DECLARATION,
    start: leftNode?.start ?? 0,
    stop: rightNode?.stop ?? 0,
    hidden: [],
    modifier,
    name,
    type,
    value,
  };
}
