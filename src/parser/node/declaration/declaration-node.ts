import { IdNode } from '~/parser/node/id/id-node';
import { ModifierNode } from '~/parser/node/modifier/modifier-node';
import { Node } from '~/parser/node/node';
import { clonePosition } from '~/parser/node/node-position';
import { NodeType } from '../node-type';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  id: IdNode | null;
  base: Node | null;
  value: Node | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  id: IdNode | null,
  base: Node | null,
  value: Node | null,
): DeclarationNode {
  const left = modifier ?? id ?? base ?? value;
  const right = value ?? base ?? id ?? modifier;

  if (!left || !right) {
    throw new Error('Not implemented');
  }

  return {
    $: NodeType.DECLARATION,
    start: clonePosition(left.start),
    stop: clonePosition(right.stop),
    modifier,
    id,
    base,
    value,
  };
}
