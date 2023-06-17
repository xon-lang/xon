import { IdNode } from '~/analysis/lexical/node/id/id-node';
import { ModifierNode } from '~/analysis/lexical/node/modifier/modifier-node';
import { OperatorNode } from '~/analysis/lexical/node/operator/operator-node';
import { NodeType, Token } from '~/analysis/node';

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
