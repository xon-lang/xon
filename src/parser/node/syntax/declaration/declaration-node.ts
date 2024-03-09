import {Nothing, nothing} from '../../../../lib/core';
import {$Node, Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {SyntaxNode, getRangeAndChildren} from '../syntax-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: (DeclarationNode | Nothing)[] | Nothing;
  parameters: (DeclarationNode | Nothing)[] | Nothing;
  type: Node | Nothing;
  assign: Node | Nothing;
  attributes: DeclarationNode[];
}

export function declarationNode(params: Partial<DeclarationNode> & {id: IdNode}): DeclarationNode {
  const node: DeclarationNode = {
    $: $Node.DECLARATION,
    ...getRangeAndChildren(
      params.modifier,
      params.id,
      ...(params.generics ?? []),
      ...(params.parameters ?? []),
      params.type,
      params.assign,
    ),
    attributes: [],
    modifier: params.modifier ?? nothing,
    id: params.id,
    generics: params.generics ?? nothing,
    parameters: params.parameters ?? nothing,
    type: params.type ?? nothing,
    assign: params.assign ?? nothing,
  };

  return node;
}
