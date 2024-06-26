import {formatChildNode} from '../../../../formatter/formatter';
import {IdNode} from '../../../lexical/node/id/id-node';
import {$Node} from '../../../node';
import {SyntaxContext} from '../../../syntax-context';
import {PrefixNode} from '../prefix/prefix-node';
import {SyntaxNode, syntaxNode} from '../syntax-node';

export type AssignmentNode = SyntaxNode<$Node.ASSIGNMENT> & {
  id: IdNode;
  assign: PrefixNode;
};

export function assignmentNode(context: SyntaxContext, id: IdNode, assign: PrefixNode): AssignmentNode {
  const node = syntaxNode($Node.ASSIGNMENT, {id, assign});

  format(context, node);

  return node;
}

function format(context: SyntaxContext, node: AssignmentNode): void {
  formatChildNode(context, node.assign, true);
}
