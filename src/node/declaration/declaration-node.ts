import { IdNode } from '~/node/lexical/id/id-node';
import { ModifierNode } from '~/node/lexical/modifier/modifier-node';
import { Node, NodeType } from '~/node/node';
import { OperatorNode } from '~/node/operator/operator-node';
import { LexicalNode } from '../lexical/lexical-node';

export interface DeclarationNode extends Node {
  $: NodeType.DECLARATION;
  modifier: ModifierNode | null;
  name: IdNode | OperatorNode | null;
  parameters: (DeclarationNode | null)[] | null;
  type: LexicalNode | null;
  value: LexicalNode | null;
}

export function declarationNode(
  modifier: ModifierNode,
  name: IdNode | OperatorNode,
  parameters: (DeclarationNode | null)[] | null,
  type: LexicalNode | null,
  value: LexicalNode | null,
): DeclarationNode {
  return {
    $: NodeType.DECLARATION,
    start: modifier.start,
    stop: type?.stop ?? parameters?.lastOrNull()?.stop ?? name.stop,
    modifier,
    name,
    parameters,
    type,
    value,
  };
}

// model? A? {T: Number, T2}(p1: P, p2: P)?: R
