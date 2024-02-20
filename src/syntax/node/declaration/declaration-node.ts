import { Nothing, nothing } from '../../../lib/core';
import { rangeFromNodes } from '../../../source/source-range';
import { CloseNode } from '../close/close-node';
import { IdNode } from '../id/id-node';
import { $Node, SyntaxNode, addNodeParent } from '../node';
import { OpenNode } from '../open/open-node';
import { OperatorNode } from '../operator/operator-node';
import { PrefixNode } from '../prefix/prefix-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: DeclarationListNode | Nothing;
  parameters: DeclarationListNode | Nothing;
  type: PrefixNode | Nothing;
  assign: PrefixNode | Nothing;
  attributes: DeclarationNode[];
}

export function declarationNode(params: Partial<DeclarationNode> & { id: IdNode }): DeclarationNode {
  const start = params.modifier ?? params.id;
  const end = params.assign ?? params.type ?? params.parameters ?? params.generics ?? params.id;
  const range = rangeFromNodes(start, end);

  const node: DeclarationNode = {
    $: $Node.DECLARATION,
    range,
    children: [],
    attributes: [],
    modifier: params.modifier ?? nothing,
    id: params.id,
    generics: params.generics ?? nothing,
    parameters: params.parameters ?? nothing,
    type: params.type ?? nothing,
    assign: params.assign ?? nothing,
  };

  addNodeParent(node, params.modifier, params.id, params.generics, params.parameters, params.type, params.assign);

  return node;
}

export interface DeclarationListNode extends SyntaxNode {
  $: $Node.DECLARATION_LIST;
  open: OpenNode;
  close: CloseNode | Nothing;
  items: (DeclarationNode | Nothing)[];
}

export function declarationListNode(
  open: OpenNode,
  close: CloseNode | null,
  items: (DeclarationNode | Nothing)[],
): DeclarationListNode {
  const last = items.lastOrNull();

  const node: DeclarationListNode = {
    $: $Node.DECLARATION_LIST,
    range: rangeFromNodes(open, close ?? last ?? open),
    children: [],
    open,
    close,
    items,
  };

  addNodeParent(node, open, ...items, close);

  return node;
}
