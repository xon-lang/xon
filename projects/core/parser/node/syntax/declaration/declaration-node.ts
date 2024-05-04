import {Nothing, nothing} from '../../../../lib/core';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {OperatorNode} from '../../token/operator/operator-node';
import {Group} from '../group/group-node';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface DeclarationNode extends SyntaxNode {
  $: $Node.DECLARATION;
  modifier: OperatorNode | Nothing;
  id: IdNode;
  generics: Group | Nothing;
  parameters: Group | Nothing;
  type: PrefixNode | Nothing;
  assign: PrefixNode | Nothing;
}

export function declarationNode(
  modifier: OperatorNode | Nothing,
  id: IdNode,
  generics: Group | Nothing,
  parameters: Group | Nothing,
  type: PrefixNode | Nothing,
  assign: PrefixNode | Nothing,
): DeclarationNode {
  const node = syntaxNode($Node.DECLARATION, {
    modifier,
    id,
    generics,
    parameters,
    type,
    assign,
  });

  return node;
}

export function partialToDeclaration(params: Partial<DeclarationNode>): DeclarationNode | Nothing {
  if (!params.id) {
    return nothing;
  }

  return declarationNode(params.modifier, params.id, params.generics, params.parameters, params.type, params.assign);
}
