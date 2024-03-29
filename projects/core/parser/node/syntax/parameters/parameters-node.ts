import {Array2, Nothing} from '../../../../lib/core';
import '../../../../util/extension';
import {$Node} from '../../node';
import {CloseNode} from '../../token/close/close-node';
import {OpenNode} from '../../token/open/open-node';
import {DeclarationNode} from '../declaration/declaration-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface ParametersNode extends SyntaxNode {
  $: $Node.PARAMETERS;
  open: OpenNode;
  // todo replace with Array2<ItemNode<DeclarationNode> | Nothing>;
  items: Array2<DeclarationNode | Nothing>;
  close: CloseNode | Nothing;
}

export function parametersNode(
  open: OpenNode,
  items: Array2<DeclarationNode | Nothing>,
  close: CloseNode | Nothing,
): ParametersNode {
  const node = syntaxNode($Node.PARAMETERS, {open, items, close});

  return node;
}
