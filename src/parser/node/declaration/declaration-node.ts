import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { clonePosition, noNodePosition } from '~/parser/node/node-position';
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
  const left = modifier ?? id ?? type ?? value;
  const right = value ?? type ?? id ?? modifier;

  return {
    $: NodeType.DECLARATION,
    start: left ? clonePosition(left.start) : noNodePosition(),
    stop: right ? clonePosition(right.stop) : noNodePosition(),
    modifier,
    id,
    type,
    value,
  };
}
