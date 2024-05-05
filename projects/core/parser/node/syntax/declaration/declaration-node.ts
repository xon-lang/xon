import {formatAfterHiddenNodes, formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing, nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
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
  context: SyntaxContext,
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

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: DeclarationNode): Nothing {
  if (node.generics || node.parameters || node.type) {
    formatBetweenHiddenNodes(context, node.id, false);
  }

  // if (node.generics || node.parameters) {
  //   formatBetweenHiddenNodes(context, node.id, false);
  // }

  if (node.assign) {
    formatBetweenHiddenNodes(context, node.id, true);
  }

  formatAfterHiddenNodes(context, node, false);
}

export function partialToDeclaration(
  context: SyntaxContext,
  params: Partial<DeclarationNode>,
): DeclarationNode | Nothing {
  if (!params.id) {
    return nothing;
  }

  return declarationNode(
    context,
    params.modifier,
    params.id,
    params.generics,
    params.parameters,
    params.type,
    params.assign,
  );
}
