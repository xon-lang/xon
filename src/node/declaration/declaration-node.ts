import { NodeType, Token } from '~/analysis/node';
import { IdNode } from '~/node/id/id-node';
import { ModifierNode } from '~/node/modifier/modifier-node';
import { OperatorNode } from '~/node/operator/operator-node';

export interface DeclarationNode extends Token {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | OperatorNode | null;
  parameters: (DeclarationNode | null)[] | null;
  type: Token | null;
  value: Token | null;
}

export function declarationNode(
  modifier: ModifierNode | null,
  name: IdNode | OperatorNode | null,
  parameters: (DeclarationNode | null)[] | null,
  type: Token | null,
  value: Token | null,
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
