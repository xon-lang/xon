import {Nothing, nothing} from '../../../../lib/core';
import {Group} from '../../group/group-node';
import {$Node} from '../../node';
import {DeclarationNode} from '../declaration/declaration-node';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface LambdaNode extends SyntaxNode {
  $: $Node.LAMBDA;
  generics: Group | Nothing;
  parameters: Group;
  type: PrefixNode | Nothing;
  assign: PrefixNode | Nothing;
}

export function lambdaNode(
  generics: Group | Nothing,
  parameters: Group,
  type: PrefixNode | Nothing,
  assign: PrefixNode | Nothing,
): LambdaNode {
  const node = syntaxNode($Node.LAMBDA, {
    generics,
    parameters,
    type,
    assign,
  });

  return node;
}

export function declarationToLambda(params: Partial<DeclarationNode>): LambdaNode | Nothing {
  if (!params.parameters) {
    return nothing;
  }

  return lambdaNode(params.generics, params.parameters, params.type, params.assign);
}
