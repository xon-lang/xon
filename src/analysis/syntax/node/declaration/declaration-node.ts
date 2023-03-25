import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { ModifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { Node, NodeType } from '~/analysis/node';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | OperatorNode | null;
  parameters: (DeclarationNode | null)[] | null;
  type: Node | null;
  value: Node | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  name: IdNode | OperatorNode | null,
  parameters: (DeclarationNode | null)[] | null,
  type: Node | null,
  value: Node | null,
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
