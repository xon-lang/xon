import {formatBetweenHiddenNodes} from '../../../../formatter/formatter';
import {Nothing} from '../../../../lib/core';
import {SyntaxContext} from '../../../syntax-context';
import {$Node} from '../../node';
import {IdNode} from '../../token/id/id-node';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export interface AssignmentNode extends SyntaxNode {
  $: $Node.ASSIGNMENT;
  id: IdNode;
  assign: PrefixNode;
}

export function assignmentNode(context: SyntaxContext, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode($Node.ASSIGNMENT, {id, assign});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: AssignmentNode): Nothing {
  formatBetweenHiddenNodes(context, node.assign, true);
}
