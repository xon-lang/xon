import { Node, NodeType, TokenNode } from '~/analysis/node';
import { IdNode } from '~/node/id/id-node';
import { ModifierNode } from '~/node/modifier/modifier-node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | OperatorNode | null;
  parameters: (DeclarationNode | null)[] | null;
  type: TokenNode | null;
  value: TokenNode | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  name: IdNode | OperatorNode | null,
  parameters: (DeclarationNode | null)[] | null,
  type: TokenNode | null,
  value: TokenNode | null,
): DeclarationNode {
  return {
    $: NodeType.DECLARATION,
    // todo fix it
    start: modifier!.start,
    stop: modifier!.stop,
    modifier,
    name,
    parameters,
    type,
    value,
  };
}
