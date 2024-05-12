import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {Group} from '../../group/group-node';
import {$Node} from '../../node';
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
  context: SyntaxContext,
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

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: LambdaNode): Nothing {
  if (node.type) {
    formatBetweenHiddenNodes(context, node.type, false);
  }

  if (node.assign) {
    formatBetweenHiddenNodes(context, node.assign, true);
  }
}
